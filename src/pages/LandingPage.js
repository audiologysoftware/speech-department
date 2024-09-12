import React, { useContext } from 'react';
import landing from '../data/landing.json';
import Layout from '../components/layout/Layout';
import PositionContext from '../store/RouteContextProvider';

function LandingPage() {
    const { current } = useContext(PositionContext);
    const lab = landing.labs[current - 1];

    if (!lab) {
        return (
            <Layout>
                <div>
                    <h2>No Lab Found</h2>
                    <p>Please check the lab data or your selection.</p>
                </div>
            </Layout>
        );
    }

    const {about, objectives, Teammembers, members } = lab;

    return (
        <Layout>
            <div>
               

                 
                <div>
                    <h2>About</h2>
                    <p>{about}</p>
                </div>

                <h2>Objectives</h2>
                {objectives && objectives.map((objective, index) => (
                    <p key={index}>{objective}</p>
                ))}


                <h2>Team Members</h2>
                {Teammembers && Teammembers.length > 0 ? (
                    Teammembers.map((Teammembers, index) => (
                        <p key={index}>{Teammembers}</p>
                    ))
                ) : (
                    <p>no team members</p>
                )}

                {members && members.length > 0 && (
                    <>
                        <h2>Members</h2>
                        <div>
                            {members.map((member, index) => (
                                <div key={index}>
                                    <p className='titleBold'>{member.name}</p>
                                    <p>{member.designation}</p>
                                    <p>{member.address}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
}

export default LandingPage;
