import { newCompanyDataObject } from './defaultData';
import { Codec } from '@polkadot/types/types';
import { Hash } from '@polkadot/types/interfaces';

export const BLOCKS_PER_DAY = 24 * (3600 / 6);
export const daysToBlocks = (days: string) => parseInt(days) * BLOCKS_PER_DAY;

export const setMetadataCache = (genesisHash: Hash, specVersion: number, metadata: string) => {
  localStorage.setItem("substrateApiMetadata", JSON.stringify({
    [`${genesisHash}-${specVersion}`]: metadata,
  }));
};

export const getMetadataCache = () => {
  const metadataEncoded = localStorage.getItem("substrateApiMetadata");
  if (metadataEncoded) {
    return JSON.parse(metadataEncoded);
  }

  return undefined;
};

export const getNestedValue = <T>(data: any, path: string[]): T => path.reduce((acc, key) => acc && acc[key], data);

interface DynamicBlockchainData {
  isEncrypted: boolean;
  value?: string;
}

export interface BlockchainData {
  [key: string | 'staticFields' | 'dynamicFields']: string | (DynamicBlockchainData | string)[][];
}

export interface CrossReferencedFieldDataArray {
  isEncrypted?: boolean;
  display?: string;
  key?: string;
}

export function blockchainDataToFormObject(blockchainDataRaw: BlockchainData | Codec) {
  const blockchainData = (typeof blockchainDataRaw.toJSON === "function" ? blockchainDataRaw.toJSON() : blockchainDataRaw) as BlockchainData;
  const supportedObject = JSON.parse(JSON.stringify(newCompanyDataObject)) as typeof newCompanyDataObject;
  const staticFields: typeof newCompanyDataObject["staticFields"] = [];
  const dynamicFields: typeof newCompanyDataObject["dynamicFields"] = [];

  supportedObject.staticFields.forEach((staticField) => {
    if (staticField.key in blockchainData || staticField.type === 'checkbox') {
      const fieldObject = staticField;
      fieldObject.display = blockchainData[staticField.key] as string;
      staticFields.push(fieldObject);
    }
  });

  supportedObject.dynamicFields.forEach((dynamicField) => {
    if (dynamicField.key in blockchainData) {
      const fieldObject = dynamicField;
      const fieldObjectData: CrossReferencedFieldDataArray[][] = [];
      (blockchainData[dynamicField.key] as DynamicBlockchainData[][]).forEach((dynamicFieldDataArray) => {
        // Format using fields data
        const crossReferencedFieldDataArray: CrossReferencedFieldDataArray[] = [{}];
        for (const key in dynamicFieldDataArray) {
          if (Object.prototype.hasOwnProperty.call(dynamicFieldDataArray, key)) {
            const pushObject: CrossReferencedFieldDataArray = { key };
            if (dynamicFieldDataArray[key]?.isEncrypted !== undefined) {
              pushObject.display = dynamicFieldDataArray[key].value!;
              pushObject.isEncrypted = dynamicFieldDataArray[key].isEncrypted;
            } else if (typeof dynamicFieldDataArray[key] === 'string' && dynamicFieldDataArray[key] !== '[object Object]') {
              // passport number of shareholders is serialzied incorrectly, skipping
              pushObject.display = dynamicFieldDataArray[key]!;
              pushObject.isEncrypted = false;
            }
            crossReferencedFieldDataArray.push(JSON.parse(JSON.stringify(pushObject)));
          }
        }
        fieldObjectData.push(crossReferencedFieldDataArray);
      });

      fieldObject.data = JSON.parse(JSON.stringify(fieldObjectData));
      dynamicFields.push(fieldObject);
    }
  });
  blockchainData['staticFields'] = JSON.parse(JSON.stringify(staticFields));
  blockchainData['dynamicFields'] = JSON.parse(JSON.stringify(dynamicFields));
  return blockchainData;
}
