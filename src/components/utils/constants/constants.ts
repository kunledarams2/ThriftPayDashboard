
export const RE_DIGIT = new RegExp(/^\d+$/);



export  enum RequestStatus {
    Decline = "Decline",
    Approve = "Approve",
}
  
export enum KYCType{
  BVN = "BVN Verification",
  ID = "ID Verification",
  NextKin = "Next of Kin",
  Address = "Address Verification"
}