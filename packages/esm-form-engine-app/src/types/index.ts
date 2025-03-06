import { type OpenmrsFormResource } from '@csaude/esm-form-engine-lib';
import { type OpenmrsResource } from '@openmrs/esm-framework';

export interface Form {
  uuid: string;
  encounterType?: OpenmrsResource;
  name: string;
  display?: string;
  version: string;
  published: boolean;
  retired: boolean;
  resources: Array<OpenmrsFormResource>;
  formCategory?: string;
}
