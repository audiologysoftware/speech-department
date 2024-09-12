import React from "react";
import Layout from "../components/layout/Layout";
import labData from "../data/landing.json";

export default function LabPage() {
  return (
    <Layout>
      {labData.labs.map((lab, index) => (
        <div key={index}>
         
          <p>{lab.About}</p>
          <h2>Objectives</h2>
          <ul>
            {lab.objectives.map((objective, i) => (
              <li key={i}>{objective}</li>
            ))}
          </ul>
        
          <h2>Team Members</h2>
          <ul>
            {lab.Teammembers.map((Teammembers, i) => (
              <li key={i}>{Teammembers}</li>
            ))}
          </ul>
          {lab.members && lab.members.length > 0 && (
            <>
              <h2>Members</h2>
              <div>
                {lab.members.map((member, i) => (
                  <div key={i}>
                    <p className='titleBold'>{member.name}</p>
                    <p>{member.designation}</p>
                    <p>{member.address}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </Layout>
  );
}
