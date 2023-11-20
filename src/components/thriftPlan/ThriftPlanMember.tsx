import React from "react";
import defaultAvatar from "../../assets/Avatar.jpg";
import { Members } from "../../services/thriftPlans";
import { useStateContext } from "./state_provider/OverviewStateContext";
import EmptyContainer from "../utils/EmptyContainer";
import NoContentSVG from "../../assets/empty_member.svg";

interface Props {
  members: Members;
}

const ThriftPlanMember = ({ members }: Props) => {
  const { parentState, setParentState } = useStateContext();
  {
    parentState.response?.data.member;
  }
  console.log(members);
  return (
    <>
      {parentState.response?.data.member.length === 0 && (
        <EmptyContainer
          title={"No Thrift Members"}
          body={""}
          imagePath={NoContentSVG}
        />
      )}

      {parentState.response?.data.member.map((result) => (
        <div className="thrift-member">
          <div className="frame-1000002740-member">
            <img
              className="avatars-thrift-member"
              src={defaultAvatar}
              alt="SVG logo image"
            />
            <div className="frame-1000002741">
              <div className="john-doe-thrift-member">{result.full_name} </div>
              <div className="johndoe-example-com-thrift-member">
                {result.phone_number}{" "}
              </div>
            </div>
          </div>
          <div className="info-3-thrift-member">
            <div className="slot-thrift-member">Slot </div>
            <div className="_7-thrift-member">{result.slot} </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ThriftPlanMember;
