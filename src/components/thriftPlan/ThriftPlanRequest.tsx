import React, { useState } from "react";
import defaultAvatar from "../../assets/Avatar.jpg";
import { RequestMembers } from "../../services/thriftPlans";
import { useStateContext } from "./state_provider/OverviewStateContext";
import ReviewRquest from "../modal/ReviewRequest/ReviewRquest";
import EmptyContainer from "../utils/EmptyContainer";
import NoContentSVG from "../../assets/no_content_backup.svg";

interface Props {
  openReview: () => boolean;
}

const ThriftPlanRequest = () => {
  const { parentState, setParentState } = useStateContext();
  {
    parentState.response?.data.requests;
  }
  console.log(parentState.response?.data.requests);
  const [open, setOpen] = useState(false);
  const closeHandleClose = () => setOpen(false);

  // const openCreateThriftModal = () => {
  //   setOpen(true);
  // };
  return (
    <>
      {parentState.response?.data.requests.length === 0 && (
        <EmptyContainer
          title={"No requests"}
          body={
            "No request yet, requests to join to join thrift plan will appear here."
          }
          imagePath={NoContentSVG}
        />
      )}
      {parentState.response?.data.requests.map((result) => (
        <div className="thrift-join-request">
          <img
            className="avatars-thrift-join-request"
            src={defaultAvatar}
            alt="SVG logo image"
          />
          <div className="frame-183-request">
            <div className="frame-2716-request ">
              <div className="frame-2717-request">
                <div className="john-doe-thrift-join-request">
                  {result.full_name}
                </div>
                <div className="requested-to-join-thrift-plan">
                  Requested to join thrift plan{" "}
                </div>
              </div>
              <div className="frame-2718">
                <div className="_30-mins-ago-thrift-join-request">
                  {" "}
                  30 Mins{" "}
                </div>
              </div>
            </div>
            <div className="buttons-thrift-join-request">
              <div className="button-thrift-join-request">
                <div
                  className="button2-thrift-join-request"
                  onClick={() => {
                    // openReview
                    setParentState({
                      openReview: true,
                      loading: false,
                      response: parentState.response,
                      request: result,
                      closeReview: true,
                    });
                  }}
                >
                  Review{" "}
                </div>
              </div>
              {/* <div className="button3-thrift-join-request">
                <div className="button4-thrift-join-request">Decline </div>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ThriftPlanRequest;
