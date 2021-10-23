import {importXlsx} from '../../src/helpers/importXlsx';
import {Person} from '../../src/classes/Person';


describe('importXlsx', () => {
  describe('importFileFromDisk', () => {
    it('xlsx file have not a good path', () => {
      const path = '../../files/E.xlsx';
      expect(() => {
        importXlsx(path);
      }).toThrowError();
    });
    it('xlsx file is not xlsx', () => {
      const path = '../../files/Exemple.csv';
      expect(() => {
        importXlsx(path);
      }).toThrowError();
    });
    it('file should get persons', () => {
      const path = 'files/Exemple.xlsx';
      const personsImported = importXlsx(path);
      expect(personsImported[0]).toBeInstanceOf(Person);
    });
  });
});
