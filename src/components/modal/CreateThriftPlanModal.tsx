import React, { useState } from "react";
import "./createThrift.css";
import { Button, Form } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CurrencyInput from "react-currency-input-field";
import { number, z } from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPlanRequest, CreatePlan } from "../../services/thriftPlans";
import moment from "moment";

//
interface Props {
  close: any;
  open: boolean;
}

const thriftType = {
  a: { key: "a", label: "Weekly" },
  b: { key: "b", label: "Monthly" },
  c: { key: "c", label: "Quarterly" },
};

const formSchema = z.object({
  name: z.string().min(1, "Plan name is required...").max(100),
  contributionAmount: z
    .string()
    .min(1, "Contribution amount is required...")
    .max(100),
  salaryRange: z.string().min(1, "Salary range amount is required...").max(100),
  totalSlot: z.number().min(1, "Slot amount is required...").max(100),
  startDate: z.date({
    required_error: "Start date is required",
    invalid_type_error: "Format invalid",
  }),
  remittanceDay: z.object({ value: z.string(), label: z.string() }),
  planTypeSelected: z.object({ value: z.string(), label: z.string() }),
  // isCompanyUserAdded: z.boolean().optional(),
  companyUsers: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const CreateThriftPlanModal = ({ close, open }: Props) => {
  const planType = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
  ];

  const remittanceDays = [
    { value: "3", label: "3rd day of the month" },
    { value: "5", label: "5th day of the month" },
    { value: "10", label: "10th day of the month" },
  ];

  const companyMember = [
    { value: "remi@gmail.com", label: "Remi Ojo" },
    { value: "kolamoney@yopmail.com", label: "Kola Money" },
    { value: "thriftpaydarams@gmail.com", label: "Enoch Darams" },
    { value: "kunledarams3@gmail.com", label: "Adeniyi Adekola" },
    { value: "kunledarams2@gmail.com", label: "Ojo Kdarams" },
  ];
  // const handleTypeSelected = () => {
  //   console.log("Okay");
  // };
  const customStyles = {
    option: (defaultStyles: any, state: { isSelected: any }) => ({
      color: state.isSelected ? "#212529" : "#c3c6d2",
      backgroundColor: state.isSelected ? "#fff" : "#eeee",
      padding: "10px",
      cursor: "pointer",
    }),

    control: (defaultStyles: any) => ({
      backgroundColor: " #fafafb",
      borderRadius: "8px",
      borderStyle: "solid",
      borderColor: "#c3c6d2",
      borderWidth: " 1px",
      padding: "10px 10px 10px 16px",
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      alignItems: "center",
      justifyContent: "flex-start",
      alignSelf: "stretch",
      flexShrink: "0",
      height: "48px",
      // width: "300px",
      position: "relative",
      // boxShadow: "none",
      outline: "none",
      cursor: "pointer",
      width: "180px",
    }),
    singleValue: (defaultStyles: any) => ({
      ...defaultStyles,
      color: "#666f89",
      backgroundColor: "#afafb",

      // cursor: "pointer",
    }),
  };

  const customStyles2 = {
    option: (defaultStyles: any, state: { isSelected: any }) => ({
      // ...defaultStyles,
      color: state.isSelected ? "#212529" : "#c3c6d2",

      padding: "10px",
      cursor: "pointer",
    }),

    control: (defaultStyles: any) => ({
      backgroundColor: " #fafafb",
      borderRadius: "8px",
      borderStyle: "solid",
      borderColor: "#c3c6d2",
      borderWidth: " 1px",
      padding: "6px 6px 6px 6px",
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      alignItems: "center",
      justifyContent: "flex-start",
      alignSelf: "stretch",
      flexShrink: "0",
      // height: "38px",
      width: "396px",
      position: "relative",
      // boxShadow: "none",
      outline: "none",
      cursor: "pointer",
      // width: "180px",
    }),
    singleValue: (defaultStyles: any) => ({
      ...defaultStyles,
      color: "#666f89",
      backgroundColor: "#afafb",

      // cursor: "pointer",
    }),
  };
  const dateF = new Date();

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [toggle, setToggle] = useState(false);

  const toggleView = () => {
    if (toggle) {
      setToggle(false);
      console.log("Okay");
    } else {
      setToggle(true);
    }
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
    console.log("Okay");

    const request_data: createPlanRequest = {
      name: data.name,
      contribution_amount: Number(data.contributionAmount) * 100,
      salary_range: Number(data.salaryRange) * 100,
      start_date: moment(data.startDate).format("YYYY-MM-DD"),
      remittance_day: data.remittanceDay.value,
      total_slot: data.totalSlot,
      company_users: data.companyUsers?.map((result) => result.value)!,
      tenure: data.planTypeSelected.value,
      is_external_plan: false,
    };

    console.log(request_data);
    CreatePlan(request_data).then((response) => console.log(response));
  };

  return (
    <div
      className="overlay-modal-create-plan"
      style={{
        transform: open ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: open ? 1 : 0,
      }}
    >
      <Form
        className="add-thrift-plan"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="frame-1000002726-create-thrift ">
          <div className="add-thrift-plan2">Add Thrift Plan </div>
          <div className="button-create-thrift" onClick={close}>
            <svg
              className="icons-create-thrift"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1565_20080)">
                <path
                  d="M10.9375 3.0625L3.0625 10.9375"
                  stroke="#444A5B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9375 10.9375L3.0625 3.0625"
                  stroke="#444A5B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1565_20080">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="frame-1000002725-create-thrift ">
          <div className="input-text-create-thrift ">
            <div className="label-create-thrift ">Thrift Name </div>
            <input
              className="field-create-thrift"
              placeholder="Enter thrift name"
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <span className="this-is-an-error">{errors.name?.message}</span>
            )}
          </div>

          <div className="frame-1000002792-create-thrift ">
            <div className="input-text2-create-thrift ">
              <div className="label-create-thrift ">Thrift Type </div>
              <Controller
                control={control}
                name="planTypeSelected"
                render={({ field: { onChange } }) => (
                  <Select
                    onChange={onChange}
                    options={planType}
                    styles={customStyles}
                    placeholder="Select"
                  />
                )}
              />
              {errors.planTypeSelected && (
                <span className="this-is-an-error">
                  {errors.planTypeSelected?.message}
                </span>
              )}
            </div>
            <div className="input-text2-create-thrift ">
              <div className="label-create-thrift ">Amount per Member </div>
              <div className="field2-create-thrift ">
                <svg
                  className="icons3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1565_21457)">
                    <path
                      d="M10.5 8C10.5 8.49445 10.3534 8.9778 10.0787 9.38893C9.80397 9.80005 9.41352 10.1205 8.95671 10.3097C8.49989 10.4989 7.99723 10.5484 7.51227 10.452C7.02732 10.3555 6.58186 10.1174 6.23223 9.76777C5.8826 9.41814 5.6445 8.97268 5.54804 8.48773C5.45157 8.00277 5.50108 7.50011 5.6903 7.04329C5.87952 6.58648 6.19995 6.19603 6.61107 5.92133C7.0222 5.64662 7.50555 5.5 8 5.5C8.66304 5.5 9.29893 5.76339 9.76777 6.23223C10.2366 6.70107 10.5 7.33696 10.5 8ZM15.5 4V12C15.5 12.1326 15.4473 12.2598 15.3536 12.3536C15.2598 12.4473 15.1326 12.5 15 12.5H1C0.867392 12.5 0.740215 12.4473 0.646447 12.3536C0.552678 12.2598 0.5 12.1326 0.5 12V4C0.5 3.86739 0.552678 3.74021 0.646447 3.64645C0.740215 3.55268 0.867392 3.5 1 3.5H15C15.1326 3.5 15.2598 3.55268 15.3536 3.64645C15.4473 3.74021 15.5 3.86739 15.5 4ZM14.5 6.89687C13.9323 6.729 13.4155 6.42175 12.9969 6.00311C12.5782 5.58447 12.271 5.06775 12.1031 4.5H3.89687C3.729 5.06775 3.42175 5.58447 3.00311 6.00311C2.58447 6.42175 2.06775 6.729 1.5 6.89687V9.10312C2.06775 9.271 2.58447 9.57825 3.00311 9.99689C3.42175 10.4155 3.729 10.9323 3.89687 11.5H12.1031C12.271 10.9323 12.5782 10.4155 12.9969 9.99689C13.4155 9.57825 13.9323 9.271 14.5 9.10312V6.89687Z"
                      fill="#666F89"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1565_21457">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <Controller
                  control={control}
                  name="contributionAmount"
                  render={({ field: { onChange } }) => (
                    <CurrencyInput
                      className="input-create-thrift"
                      placeholder="Enter Amount"
                      prefix="₦"
                      decimalsLimit={2}
                      onValueChange={onChange}
                    />
                  )}
                />
              </div>
              {errors.contributionAmount && (
                <span className="this-is-an-error">
                  {errors.contributionAmount?.message}
                </span>
              )}
            </div>
          </div>

          <div className="input-text-create-thrift">
            <div className="label-create-thrift">Number of Slots </div>
            <input
              className="field-create-thrift"
              placeholder="Enter No of Slots"
              type="number"
              {...register("totalSlot", {
                setValueAs: (v) => (v === "" ? undefined : parseInt(v, 10)),
              })}
            />
            {errors.totalSlot && (
              <span className="this-is-an-error">
                {errors.totalSlot?.message}
              </span>
            )}
            <div className="field--create-thrift"></div>
          </div>
          <div className="frame-1000002793-create-thrift ">
            <div className="input-text2-create-thrift">
              <div className="label-create-thrift">Salary Range </div>

              <div className="field-create-thrift">
                <Controller
                  control={control}
                  name="salaryRange"
                  render={({ field: { onChange } }) => (
                    <CurrencyInput
                      className="input-create-thrift"
                      placeholder="Enter Amount"
                      prefix="₦"
                      decimalsLimit={2}
                      onValueChange={onChange}
                    />
                  )}
                />
              </div>
              {errors.salaryRange && (
                <span className="this-is-an-error">
                  {errors.salaryRange?.message}
                </span>
              )}
            </div>
            <div className="input-text2-create-thrift">
              <div className="label-create-thrift">Start Date </div>

              <Controller
                control={control}
                name="startDate"
                // {...register("planTypeSelected")}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    placeholderText="Select"
                    className="field-create-thrift"
                    // placeholderText="Select"
                    selected={value}
                    onChange={onChange}
                    dateFormat="MMMM d, yyyy"
                  />
                )}
              />
              {errors.startDate && (
                <span className="this-is-an-error">
                  {errors.startDate?.message}
                </span>
              )}
            </div>
          </div>
          <div className="input-text-create-thrift">
            <div className="label-create-thrift">Monthly Remittance Day </div>
            <Controller
              control={control}
              name="remittanceDay"
              render={({ field: { onChange } }) => (
                <Select
                  placeholder="Select"
                  onChange={onChange}
                  options={remittanceDays}
                  styles={customStyles2}
                />
              )}
            />
            {errors.remittanceDay && (
              <span className="this-is-an-error">
                {errors.remittanceDay?.message}
              </span>
            )}
          </div>
          <div className="input-text-create-thrift">
            <div className="add-company-user-to-plan-create-thrift">
              Add Company User to Plan{" "}
            </div>
            <div className="toggle-create-thrift">
              <div className="radio-button-create-thrift">
                <div
                  className="rectangle-create-thrift"
                  style={{ background: toggle ? "#cc3366" : "#e4e5eb" }}
                ></div>
                <div
                  className="oval-create-thrift"
                  onClick={() => {
                    toggleView();
                    // register("isCompanyUserAdded");
                  }}
                  style={{
                    left: toggle ? " calc(50% - -4px)" : "calc(50% - 28px)",
                  }}
                ></div>
              </div>
            </div>
          </div>
          {toggle && (
            <div className="input-text-create-thrift">
              <div className="label-create-thrift">
                Select Users to Add to Plan{" "}
              </div>

              <Controller
                control={control}
                name="companyUsers"
                render={({ field: { onChange } }) => (
                  <Select
                    onChange={onChange}
                    options={companyMember}
                    styles={customStyles2}
                    isMulti
                    placeholder="Select"
                  />
                )}
              />
              {errors.companyUsers && (
                <span className="this-is-an-error">
                  {errors.companyUsers?.message}
                </span>
              )}
            </div>
          )}
        </div>

        <Button
          className="button"
          variant="primary"
          type="submit"
          disabled={isSubmitting}
        >
          Create Plan
        </Button>
        <div></div>
      </Form>
    </div>
  );
};
export default CreateThriftPlanModal;
