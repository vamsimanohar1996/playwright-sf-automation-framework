export class Env{

   public static readonly BASE_URL : string = process.env.URL ?? "";
   public static readonly USERNAME : string = process.env.USERNAME ?? "";
   public static readonly PASSWORD = process.env.PASSWORD ?? "";

   public static readonly SF_BASE_URL : string = process.env.SF_URL ?? "";
   public static readonly SF_USERNAME : string = process.env.SF_USERNAME ?? "";
   public static readonly SF_PASSWORD : string = process.env.SF_PASSWORD ?? "";


}