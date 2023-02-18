export interface CuisinesLabel {
  Id: number;
  Label: string;
}

export interface TagsLabel {
  Id: number;
  Label: string;
}

export interface Branch {
  CompanyId: number;
  BranchId: number;
  Id: number;
  Name: string;
  BranchName: string;
  AddressId: number;
  Address: string;
  ContactUserId: number;
  IsDeactivated: boolean;
  BillingCode: string;
  DateModified: string;
  BranchUnavailableMessage?: any;
  IsBranchTimingOpen: boolean;
  IsSpecialDateOpen: boolean;
  IsServiceRegionallyEnabled: boolean;
  IsShuttleOpen: boolean;
  NextOpeningTime: Date;
  NextClosingTime: Date;
  CompanyName: string;
  CompanyDescription: string;
  CompanyTagline: string;
  DatePublished: Date;
  CompanyType: string;
  DeliveryType: string;
  CompanyHeaderImageUrlSmall: string;
  CompanyHeaderImageUrlLarge: string;
  CompanyLogoImageUrl: string;
  DeliveryFeeDiscountId?: number;
  DeliveryFeeReal: number;
  DeliveryFeeDiscounted?: number;
  MinimumDiscountFoodValue: number;
  Cuisines: number[];
  CuisinesLabels: CuisinesLabel[];
  Tags: number[];
  TagsLabels: TagsLabel[];
  MinimumOrderValue: number;
  LocationHash: string;
  RatingAverage: number;
  RatingCount: number;
  PreparationMinutesAverage: number;
  PreparationMinutesDeviation?: any;
  DeliveryEstimationMin: number;
  PostalDeliveryEstimationMin?: any;
  DeliveryEstimationMax: number;
  PostalDeliveryEstimationMax?: any;
  AllowPayAtTheDoor?: any;
  IsBranchOpen: boolean;
  HasPickupOption: boolean;
  DistanceToDestination: number;
  CountryOfOrigin: string;
  IsFavorite: boolean;
  IsNew: boolean;
  IsInServiceArea: boolean;
  ServiceDescription?: any;
}

export interface RootObject {
  branches: Branch[];
}

export interface ItemPicture {
  Id: number;
  PictureUrl: string;
  Position: number;
  PictureName: string;
  ImageThumbnail: string;
}

export interface Item {
  Id: number;
  BranchId: number;
  MenuItemId: number;
  Name: string;
  Description: string;
  DisplayOrderNo: number;
  IsSoldOut: boolean;
  IsBestSeller: boolean;
  HasCustomization: boolean;
  HasAddons: boolean;
  DisplayPrice: number;
  DefaultVariantId: number;
  PriceBeforeMarkUp: number;
  PictureName: string;
  HasImage: boolean;
  Image: string;
  ImageThumbnail: string;
  ItemPictures: ItemPicture[];
  PlaceholderIcon: string;
  MenuComponentTypeId: number;
}

export interface Menu {
  Id: number;
  Name: string;
  DisplayOrderNo: number;
  DeliveryType: string;
  Items: Item[];
}

export interface MainMenu {
  BranchId: number;
  Menu: Menu[];
}
