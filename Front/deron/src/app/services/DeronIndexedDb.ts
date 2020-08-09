import { DBSchema } from 'idb';
export interface DeronIndexedDb extends DBSchema {
    validation:{
        key: string,
        value:{ canValidate: boolean}
    },
    register: {
        key: string,
        value:{
          email: string;
          password: string;
          phone: string;
          username: string;
        };
      },
      user:{
        key: number,
        value:{
          id: number,
          token: string
        }
      }
  }
  