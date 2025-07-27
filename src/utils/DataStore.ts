
class DataStore {
    private static instance: DataStore;
  
    private bookindReference: any | null = null;
 
  
    private constructor() {}
  
    public static getInstance(): DataStore {
      if (!DataStore.instance) {
        DataStore.instance = new DataStore();
      }
      return DataStore.instance;
    }
  

    public setBookingId(id: any): void {
      this.bookindReference = id;
    }
  
    public getBookingId(): string | null {
      return this.bookindReference;
    }

    
  }
  
  export const SharedData = DataStore.getInstance();
  