/* eslint-disable @next/next/no-img-element */
import React from "react";
import teamSkillsProgress from "../../common/teamSkillsProgress";
import tooltipEffect from "../../common/tooltipEffect";
import teamsDate from "../../data/sections/team.json";

const Team = () => {
  React.useEffect(() => {
    teamSkillsProgress()
    setTimeout(() => {
      tooltipEffect()
    }, 1000);
  }, []);
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    {teamsDate.teams.slice(0, 2).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(0, 2).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <img src={team.image} alt="" className="imago wow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(2, 4).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(2, 4).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <img src={team.image} alt="" className="imago wow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
