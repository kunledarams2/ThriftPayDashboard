import React from 'react'
// import "./overview.css";

const UserDistribution = () => {
  return (
    <div className="users-distribution">
    <div className="frame">
      <div className="heading">Users Distribution</div>
      <p className="p">3200 Users in 20 States</p>
    </div>
    <div className="frame-wrapper">
      <div className="frame-2">
        <div className="nigeria">
          <div className="frame-3">
            {/* <Tooltip
              CTA={false}
              className="tooltip-instance"
              closeIcon
              pointerDirection="bottom"
              pointerPosition="two-nd"
              supportingText
              tooltipStyleBottomTooltipMasterBottomFrame="image.svg"
              tooltipStyleBottomTooltipMasterContentClassName="tooltip-6"
              tooltipStyleBottomTooltipMasterHeaderClassName="tooltip-3"
              tooltipStyleBottomTooltipMasterSubtextClassName="tooltip-5"
              tooltipStyleBottomTooltipMasterText="FCT"
              tooltipStyleBottomTooltipMasterText1="500 Users"
              tooltipStyleBottomTooltipMasterTitleClassName="tooltip-2"
              tooltipStyleBottomTooltipMasterTooltipMasterClassName="tooltip-4"
              tooltipStyleBottomTooltipMasterVisible={false}
            /> */}
            <div className="ellipse" />
          </div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-2">Top States</div>
          <div className="frame-5">
            <div className="frame-6">
              <div className="text-wrapper-3">Lagos</div>
              <div className="text-wrapper-4">2.1k</div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-3">Rivers</div>
              <div className="text-wrapper-4">1.2k</div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-3">FCT</div>
              <div className="text-wrapper-4">500</div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-3">Oyo</div>
              <div className="text-wrapper-4">154</div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-3">Ogun</div>
              <div className="text-wrapper-4">89</div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-3">Imo</div>
              <div className="text-wrapper-4">55</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default UserDistribution