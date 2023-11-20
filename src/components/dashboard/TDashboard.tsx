import React from "react";
// import { Button } from "./Button";
// import { IconCaretDownTypeRegular } from "./IconCaretDownTypeRegular";
// import { IconComponentNode } from "./IconComponentNode";
import Icons from "../../assets/Icons.svg";
// import { MediaIcon } from "./MediaIcon";
// import { NamecandidateNameIconsScore101 } from "./NamecandidateNameIconsScore101";
// import { NamecandidateNameIconsScore102 } from "./NamecandidateNameIconsScore102";
// import { NamecandidateNameIconsScore103 } from "./NamecandidateNameIconsScore103";
// import { NamecandidateNameIconsScore104 } from "./NamecandidateNameIconsScore104";
// import { NamecandidateNameIconsScore105 } from "./NamecandidateNameIconsScore105";
// import { Tooltip } from "./Tooltip";
import defaultAvatar from "../../assets/Avtar.jpg";

export const TDashboardContent = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[1184px] items-start gap-[24px] p-[24px] relative bg-[#fdfdfd]">
      {/* <Button
                className="!flex-[0_0_auto]"
                icon={<IconCaretDownTypeRegular className="!relative !w-[16px] !h-[16px]" color="#444A5B" />}
                iconOnly={false}
                leftIcon="off"
                outline="on"
                rightIcon="on"
                size="medium"
                state="default"
                text="Past week"
                type="secondary"
            /> */}
      <div className="flex items-start gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[578px] items-start gap-[20px] relative self-stretch">
          <div className="flex items-start gap-[20px] relative flex-1 self-stretch w-full grow">
            <div className="flex flex-col items-start justify-center gap-[16px] p-[20px] flex-1 grow bg-[#fdfdfd] rounded-[10px] border-[0.5px] border-solid border-[color:var(--border-dividerdark)] relative self-stretch">
              <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto] mt-[-3.18px]">
                <div className="inline-flex items-start gap-[10px] p-[8px] relative flex-[0_0_auto] bg-[color:var(--accentyellow)] rounded-[50px]">
                  <Icons />
                  <svg></svg>
                  {/* <Icons className="!relative !w-[24px] !h-[24px]" /> */}
                </div>
              </div>
              <div className="flex items-end relative self-stretch w-full flex-[0_0_auto] mb-[-3.18px]">
                <div className="flex flex-col items-center gap-[12px] relative flex-1 grow">
                  <div className="mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] relative self-stretch ">
                    Total Users
                  </div>
                  <div className="relative self-stretch [font-family:var(--heading-h3-font-family)] font-[number:var(--heading-h3-font-weight)] text-[color:var(--text-500)] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] ">
                    250
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[5px] px-[8px] py-[4px] rounded-[20px] relative flex-[0_0_auto]">
                    {/* <IconComponentNode className="!relative !w-[12px] !h-[12px]" /> */}
                    <div className="relative w-fit mt-[-1.00px] [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--secondary-400)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap ">
                      +2.5%
                    </div>
                  </div>
                  <div className="relative w-fit [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap ">
                    Last 7 Days
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[16px] p-[20px] flex-1 grow bg-[#fdfdfd] rounded-[10px] border-[0.5px] border-solid border-[color:var(--border-dividerdark)] relative self-stretch">
              <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto] mt-[-3.18px]">
                <div className="inline-flex items-start gap-[10px] p-[8px] relative flex-[0_0_auto] bg-[color:var(--accentpurple)] rounded-[50px]">
                  {/* <NamecandidateNameIconsScore101 className="!relative !w-[24px] !h-[24px]" /> */}
                </div>
              </div>
              <div className="flex items-end relative self-stretch w-full flex-[0_0_auto] mb-[-3.18px]">
                <div className="flex flex-col items-center gap-[12px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] ">
                    Total Thrift plans
                  </div>
                  <div className="relative self-stretch [font-family:var(--heading-h3-font-family)] font-[number:var(--heading-h3-font-weight)] text-[color:var(--text-500)] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] ">
                    20
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[5px] px-[8px] py-[4px] rounded-[20px] relative flex-[0_0_auto]">
                    {/* <NamecandidateNameIconsScore102 className="!relative !w-[12px] !h-[12px]" /> */}
                    <div className="relative w-fit mt-[-1.00px] [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--error-500)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap ">
                      -2.5%
                    </div>
                  </div>
                  <div className="relative w-fit [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap ">
                    Last 7 Days
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-[20px] relative flex-1 self-stretch w-full grow">
            <div className="flex flex-col items-start gap-[12px] p-[20px] relative flex-1 self-stretch grow bg-[#fdfdfd] rounded-[10px] border-[0.5px] border-solid border-[color:var(--border-dividerdark)]">
              <div className="flex items-center gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-start gap-[10px] p-[8px] relative flex-[0_0_auto] bg-[color:var(--secondary-100)] rounded-[50px]">
                  {/* <NamecandidateNameIconsScore101 className="!relative !w-[24px] !h-[24px]" /> */}
                </div>
              </div>
              <div className="flex items-end relative self-stretch w-full flex-[0_0_auto] mb-[-2.35px]">
                <div className="flex flex-col items-center gap-[12px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] ">
                    Active Thrift plans
                  </div>
                  <div className="relative self-stretch [font-family:var(--heading-h3-font-family)] font-[number:var(--heading-h3-font-weight)] text-[color:var(--text-500)] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] ">
                    5
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[5px] px-[8px] py-[4px] rounded-[20px] relative flex-[0_0_auto]">
                    {/* <NamecandidateNameIconsScore102 className="!relative !w-[12px] !h-[12px]" /> */}
                    <div className="relative w-fit mt-[-1.00px] [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--error-500)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap ">
                      -2.5%
                    </div>
                  </div>
                  <div className="relative w-fit [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap ">
                    Last 7 Days
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[12px] p-[20px] relative flex-1 self-stretch grow bg-[#fdfdfd] rounded-[10px] border-[0.5px] border-solid border-[color:var(--border-dividerdark)]">
              <div className="flex items-center gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-start gap-[10px] p-[8px] relative flex-[0_0_auto] bg-[color:var(--accentblue)] rounded-[50px]">
                  {/* <NamecandidateNameIconsScore103 className="!relative !w-[24px] !h-[24px]" /> */}
                </div>
              </div>
              <div className="justify-center flex items-end relative self-stretch w-full flex-[0_0_auto] mb-[-2.35px]">
                <div className="flex flex-col items-start gap-[12px] relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] whitespace-nowrap ">
                    Total Wallet Transactions
                  </div>
                  <div className="relative self-stretch [font-family:var(--heading-h3-font-family)] font-[number:var(--heading-h3-font-weight)] text-[color:var(--text-500)] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] ">
                    500
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[5px] px-[8px] py-[4px] rounded-[20px] relative flex-[0_0_auto]">
                    {/* <NamecandidateNameIconsScore102 className="!relative !w-[12px] !h-[12px]" /> */}
                    <div className="relative w-fit mt-[-1.00px] [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--error-500)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap ">
                      -2.5%
                    </div>
                  </div>
                  <div className="relative w-fit [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap ">
                    Last 7 Days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[10px] p-[24px] relative flex-1 self-stretch grow bg-[#fdfdfd] rounded-[15px] border-[0.5px] border-solid border-[color:var(--border-dividerdark)]">
          <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[267.3px] h-[267.3px]">
                <div className="relative w-[214px] h-[214px] top-[27px] left-[27px]">
                  <img
                    className="absolute w-[96px] h-[137px] top-px left-0"
                    alt="Ellipse"
                    src="ellipse-54.svg"
                  />
                  <img
                    className="absolute w-[124px] h-[72px] top-[141px] left-[11px]"
                    alt="Ellipse"
                    src="ellipse-57.svg"
                  />
                  <img
                    className="absolute w-[107px] h-[204px] top-0 left-[107px]"
                    alt="Ellipse"
                    src="ellipse-56.svg"
                  />
                  <div className="inline-flex flex-col items-center gap-[1.25px] absolute top-[76px] left-[43px]">
                    <div className="self-stretch mt-[-1.25px] [font-family:var(--body-b2-regular-font-family)] font-[number:var(--body-b2-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b2-regular-font-size)] text-center leading-[var(--body-b2-regular-line-height)] relative tracking-[var(--body-b2-regular-letter-spacing)] ">
                      Total Thrift Plans
                    </div>
                    <div className="w-[127.09px] h-[37.98px] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative [font-family:var(--heading-h2-font-family)] font-[number:var(--heading-h2-font-weight)] text-[color:var(--text-500)] whitespace-nowrap ">
                      20
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[24px] relative flex-1 grow">
                <div className="flex items-center gap-[14px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-[8px] relative flex-1 grow">
                    <div className="relative w-[16px] h-[16px] bg-[color:var(--text-500)] rounded-[3px] rotate-[90.00deg]" />
                    <div className="flex-1 mt-[-1.00px] [font-family:var(--body-b2-regular-font-family)] font-[number:var(--body-b2-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b2-regular-font-size)] leading-[var(--body-b2-regular-line-height)] relative tracking-[var(--body-b2-regular-letter-spacing)] ">
                      Active
                    </div>
                  </div>
                  <div className="w-fit mt-[-1.00px] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] relative [font-family:var(--heading-h4-font-family)] font-[number:var(--heading-h4-font-weight)] text-[color:var(--text-500)] whitespace-nowrap ">
                    12
                  </div>
                </div>
                <div className="flex items-center gap-[14px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-[8px] relative flex-1 grow">
                    <div className="relative w-[16px] h-[16px] bg-[color:var(--accentyellow)] rounded-[3px] rotate-[90.00deg]" />
                    <div className="flex-1 mt-[-1.00px] [font-family:var(--body-b2-regular-font-family)] font-[number:var(--body-b2-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b2-regular-font-size)] leading-[var(--body-b2-regular-line-height)] relative tracking-[var(--body-b2-regular-letter-spacing)] ">
                      Ongoing
                    </div>
                  </div>
                  <div className="w-fit mt-[-1.00px] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] relative [font-family:var(--heading-h4-font-family)] font-[number:var(--heading-h4-font-weight)] text-[color:var(--text-500)] whitespace-nowrap ">
                    4
                  </div>
                </div>
                <div className="flex items-center gap-[14px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-[8px] relative flex-1 grow">
                    <div className="relative w-[16px] h-[16px] bg-[color:var(--bgdark)] rounded-[3px] rotate-[90.00deg]" />
                    <div className="flex-1 mt-[-1.00px] [font-family:var(--body-b2-regular-font-family)] font-[number:var(--body-b2-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b2-regular-font-size)] leading-[var(--body-b2-regular-line-height)] relative tracking-[var(--body-b2-regular-letter-spacing)] ">
                      Completed
                    </div>
                  </div>
                  <div className="w-fit mt-[-1.00px] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] relative [font-family:var(--heading-h4-font-family)] font-[number:var(--heading-h4-font-weight)] text-[color:var(--text-500)] whitespace-nowrap ">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[24px] p-[20px] relative flex-1 grow bg-[#fdfdfd] rounded-[15px] overflow-hidden border-[0.5px] border-solid border-[color:var(--border-dividerdark)]">
          <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start justify-center gap-[8px] relative flex-1 grow">
              <div className="self-stretch mt-[-1.00px] text-[#1a1a1a] text-[length:var(--body-b2-semi-bold-font-size)] tracking-[var(--body-b2-semi-bold-letter-spacing)] leading-[var(--body-b2-semi-bold-line-height)] relative [font-family:var(--body-b2-semi-bold-font-family)] font-[number:var(--body-b2-semi-bold-font-weight)] ">
                Total Wallet Balance
              </div>
              <div className="self-stretch text-[color:var(--text-500)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative [font-family:var(--heading-h2-font-family)] font-[number:var(--heading-h2-font-weight)] ">
                N12,340
              </div>
            </div>
            <div className="inline-flex items-center gap-[33px] relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
                <div className="w-[58px] relative h-[18px]">
                  <div className="absolute w-[10px] h-[10px] top-[5px] left-0 bg-[color:var(--secondary-500)] rounded-[3px]" />
                  <div className="absolute h-[18px] top-0 left-[20px] [font-family:'Poppins-Regular',_Helvetica] font-normal text-[color:var(--text-300)] text-[12px] tracking-[0] leading-[normal]">
                    Inflow
                  </div>
                </div>
                <div className="w-[64px] mr-[-2.00px] relative h-[18px]">
                  <div className="absolute w-[10px] h-[10px] top-[5px] left-0 bg-[color:var(--error-500)] rounded-[3px]" />
                  <div className="absolute h-[18px] top-0 left-[16px] [font-family:'Poppins-Regular',_Helvetica] font-normal text-[color:var(--text-300)] text-[12px] tracking-[0] leading-[normal]">
                    Outflow
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[10px] p-[16px] relative flex-1 grow bg-[#fdfdfd] rounded-[10px] overflow-hidden border-[0.5px] border-solid border-[color:var(--border-dividerdark)]">
              <div className="flex items-center gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-start gap-[10px] p-[8px] relative flex-[0_0_auto] bg-[#f8fffc] rounded-[100px]">
                  {/* <NamecandidateNameIconsScore104 className="!relative !w-[24px] !h-[24px]" /> */}
                </div>
                <div className="flex flex-col items-start gap-[4px] relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--heading-h4-font-family)] font-[number:var(--heading-h4-font-weight)] text-[color:var(--text-500)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] whitespace-nowrap ">
                    N12,340
                  </div>
                  <div className="[font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] relative self-stretch ">
                    Total Inflow
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="flex items-center gap-[4px] self-stretch w-full relative flex-[0_0_auto]">
                    {/* <IconComponentNode className="!relative !w-[12px] !h-[12px]" /> */}
                    <div className="relative flex-1 mt-[-1.00px] [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--secondary-400)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] ">
                      +2.5%
                    </div>
                  </div>
                  <div className="relative w-fit [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap ">
                    Last 7 Days
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[10px] p-[16px] relative flex-1 grow bg-[#fdfdfd] rounded-[10px] overflow-hidden border-[0.5px] border-solid border-[color:var(--border-dividerdark)]">
              <div className="flex items-center gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-start gap-[10px] p-[8px] relative flex-[0_0_auto] bg-[#fff2f2] rounded-[100px]">
                  {/* <NamecandidateNameIconsScore105 className="!relative !w-[24px] !h-[24px]" /> */}
                </div>
                <div className="flex flex-col items-start gap-[4px] relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--heading-h4-font-family)] font-[number:var(--heading-h4-font-weight)] text-[color:var(--text-500)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] whitespace-nowrap ">
                    N12,340
                  </div>
                  <div className="[font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] relative self-stretch ">
                    Total Outflow
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="flex items-center gap-[4px] self-stretch w-full relative flex-[0_0_auto]">
                    {/* <IconComponentNode className="!relative !w-[12px] !h-[12px]" /> */}
                    <div className="relative flex-1 mt-[-1.00px] [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--secondary-400)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] ">
                      +2.5%
                    </div>
                  </div>
                  <div className="relative w-fit [font-family:var(--caption-regular-font-family)] font-[number:var(--caption-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap ">
                    Last 7 Days
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative self-stretch w-full h-[254px]">
            <div className="w-[44px] h-[222px] top-0 absolute left-0">
              <div className="w-[34px] h-[18px] top-0 [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] absolute left-0 ">
                800
              </div>
              <div className="w-[34px] h-[18px] top-[51px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] absolute left-0 ">
                600
              </div>
              <div className="w-[34px] h-[18px] top-[102px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] absolute left-0 ">
                400
              </div>
              <div className="w-[34px] h-[18px] top-[153px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] absolute left-0 ">
                200
              </div>
              <div className="w-[22px] h-[18px] top-[204px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] absolute left-0 ">
                0
              </div>
            </div>
            <div className="flex w-[678px] items-start gap-[35px] absolute top-[238px] left-[38px]">
              <div className="relative w-[77px] mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] ">
                Mon
              </div>
              <div className="relative w-[64px] mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] ">
                Tue
              </div>
              <div className="relative w-[80px] mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] ">
                Wed
              </div>
              <div className="relative w-[68px] mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] ">
                Thu
              </div>
              <div className="relative w-[45px] mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] ">
                Fri
              </div>
              <div className="relative w-[59px] mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] ">
                Sat
              </div>
              <div className="relative w-[67px] mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-200)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] ">
                Sun
              </div>
            </div>
            <div className="absolute w-[672px] h-[204px] top-[10px] left-[44px]">
              <div className="h-[204px] top-0 left-[4px] absolute w-[667px]">
                <img
                  className="h-px top-[152px] left-0 object-cover absolute w-[667px]"
                  alt="Line"
                  src="line.svg"
                />
                <img
                  className="h-px top-[101px] left-0 object-cover absolute w-[667px]"
                  alt="Line"
                  src="image.svg"
                />
                <img
                  className="h-px top-[203px] left-0 object-cover absolute w-[667px]"
                  alt="Line"
                  src="line-2.svg"
                />
                <img
                  className="h-px top-[50px] left-0 object-cover absolute w-[667px]"
                  alt="Line"
                  src="line-3.svg"
                />
                <img
                  className="h-px -top-px left-0 object-cover absolute w-[667px]"
                  alt="Line"
                  src="line-4.svg"
                />
              </div>
              <img
                className="absolute w-[672px] h-[204px] top-px left-0"
                alt="Graphs"
                src="graphs.png"
              />
              <div className="inline-flex flex-col items-center gap-[4px] absolute top-[27px] left-[251px]">
                {/* <Tooltip
                  CTA={false}
                  className="!flex-[0_0_auto] !w-[111px]"
                  closeIcon
                  pointerDirection="bottom"
                  pointerPosition="two-nd"
                  supportingText
                  tooltipStyleBottomTooltipMasterBottomFrame="bottom-frame-4.svg"
                  tooltipStyleBottomTooltipMasterContentClassName="!bg-[#000000cc]"
                  tooltipStyleBottomTooltipMasterHeaderClassName="!bg-transparent"
                  tooltipStyleBottomTooltipMasterIcon={
                    <MediaIcon fill={false} size="sixteen-px" variant="x" />
                  }
                  tooltipStyleBottomTooltipMasterSubtextClassName="!text-[color:var(--text-100)] !tracking-[var(--body-b3-regular-letter-spacing)] !text-[length:var(--body-b3-regular-font-size)]  !font-[number:var(--body-b3-regular-font-weight)] ![font-family:var(--body-b3-regular-font-family)] !leading-[var(--body-b3-regular-line-height)]"
                  tooltipStyleBottomTooltipMasterText="Wed, 10: 25PM"
                  tooltipStyleBottomTooltipMasterText1="N1.2m"
                  tooltipStyleBottomTooltipMasterTitleClassName="!text-[color:var(--text-50)] !tracking-[0] !text-[12px]  !font-semibold ![font-family:'Inter-SemiBold',_Helvetica] !leading-[18px]"
                  tooltipStyleBottomTooltipMasterTooltipMasterClassName="!flex-1 !shadow-[unset] !grow  !backdrop-blur-[20px] !backdrop-brightness-[100%] !w-[unset]"
                /> */}
                <div className="relative w-[16px] h-[16px] mb-[-3.00px] bg-[color:var(--secondary-400)] rounded-[8px] border-[3px] border-solid border-[#fdfdfd]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[360px] items-start gap-[16px] p-[16px] relative bg-[color:var(--bgwhite)] rounded-[15px] overflow-hidden border-[0.5px] border-solid border-[color:var(--border-dividerdark)]">
          <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex-1 mt-[-1.00px] text-[#1a1a1a] text-[length:var(--body-b1-semi-bold-font-size)] tracking-[var(--body-b1-semi-bold-letter-spacing)] leading-[var(--body-b1-semi-bold-line-height)] relative [font-family:var(--body-b1-semi-bold-font-family)] font-[number:var(--body-b1-semi-bold-font-weight)] ">
              Recent Activities
            </div>
            {/* <Button
              className="!flex-[0_0_auto]"
              iconOnly={false}
              leftIcon="off"
              outline="off"
              rightIcon="off"
              size="small"
              state="default"
              text="See All"
              type="text"
            /> */}
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-[12px] px-[8px] py-[12px] relative self-stretch w-full flex-[0_0_auto] bg-[#fdfdfd]">
              <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
                <div className="flex flex-wrap items-start gap-[4px_0px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="mt-[-1.00px] relative w-fit [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    John Doe’s
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] whitespace-nowrap ">
                    request to join
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    Thrift plan
                  </div>
                  <div className="relative w-fit [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-400)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    &#34;Summer Savings&#34;
                  </div>
                  <div className="relative w-fit [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] whitespace-nowrap ">
                    approved
                  </div>
                </div>
                <div className="[font-family:var(--caption-regular-font-family)] text-[color:var(--text-200)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] relative self-stretch font-[number:var(--caption-regular-font-weight)] text-[length:var(--caption-regular-font-size)] ">
                  25 minutes ago
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[12px] px-[8px] py-[12px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[4px] relative flex-1 grow">
                <div className="flex flex-wrap items-start gap-[4px_0px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="mt-[-1.00px] relative w-fit [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    John Doe’s
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] whitespace-nowrap ">
                    contributed
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    N10,000
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] whitespace-nowrap ">
                    for the
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    Thrift plan
                  </div>
                  <div className="relative w-fit [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-400)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    &#34;Summer Savings&#34;
                  </div>
                </div>
                <div className="[font-family:var(--overline-regular-font-family)] text-[color:var(--text-30)] tracking-[var(--overline-regular-letter-spacing)] leading-[var(--overline-regular-line-height)] relative self-stretch font-[number:var(--overline-regular-font-weight)] text-[length:var(--overline-regular-font-size)] ">
                  4 hours ago
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[12px] px-[8px] py-[12px] relative self-stretch w-full flex-[0_0_auto] bg-[#fdfdfd]">
              <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
                <div className="flex flex-wrap items-start gap-[4px_0px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] whitespace-nowrap ">
                    New
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    Thrift plan
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-400)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    &#34;Rainy Day Fund&#34;
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] whitespace-nowrap ">
                    created by
                  </div>
                  <div className="relative w-fit [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    Richard Dun
                  </div>
                </div>
                <div className="[font-family:var(--caption-regular-font-family)] text-[color:var(--text-200)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] relative self-stretch font-[number:var(--caption-regular-font-weight)] text-[length:var(--caption-regular-font-size)] ">
                  2 hours ago
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[12px] px-[8px] py-[12px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[4px] relative flex-1 grow">
                <div className="flex flex-wrap items-start gap-[4px_0px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="mt-[-1.00px] relative w-fit [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    John Doe’s
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] whitespace-nowrap ">
                    contributed
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    N10,000
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] whitespace-nowrap ">
                    for the
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    Thrift plan
                  </div>
                  <div className="relative w-fit [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-400)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    &#34;Summer Savings&#34;
                  </div>
                </div>
                <div className="[font-family:var(--overline-regular-font-family)] text-[color:var(--text-30)] tracking-[var(--overline-regular-letter-spacing)] leading-[var(--overline-regular-line-height)] relative self-stretch font-[number:var(--overline-regular-font-weight)] text-[length:var(--overline-regular-font-size)] ">
                  4 hours ago
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[12px] px-[8px] py-[12px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[4px] relative flex-1 grow">
                <div className="flex flex-wrap items-start gap-[4px_0px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="mt-[-1.00px] relative w-fit [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    John Doe’s
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] whitespace-nowrap ">
                    contributed
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    N10,000
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:var(--body-b3-regular-font-family)] font-[number:var(--body-b3-regular-font-weight)] text-[color:var(--text-300)] text-[length:var(--body-b3-regular-font-size)] tracking-[var(--body-b3-regular-letter-spacing)] leading-[var(--body-b3-regular-line-height)] whitespace-nowrap ">
                    for the
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-500)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    Thrift plan
                  </div>
                  <div className="relative w-fit [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-[color:var(--text-400)] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                    &#34;Summer Savings&#34;
                  </div>
                </div>
                <div className="[font-family:var(--overline-regular-font-family)] text-[color:var(--text-30)] tracking-[var(--overline-regular-letter-spacing)] leading-[var(--overline-regular-line-height)] relative self-stretch font-[number:var(--overline-regular-font-weight)] text-[length:var(--overline-regular-font-size)] ">
                  4 hours ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
