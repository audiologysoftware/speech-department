import React, { useContext } from 'react';
import landing from '../data/landing.json';
import Layout from '../components/layout/Layout';
import PositionContext from '../store/RouteContextProvider';
import ImageCarousel from '../pages/ImageCarousel';// Ensure ImageCarousel is imported if used

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

    const { about, objectives, Teammembers, members, images } = lab;

    return (
        <Layout>
            <div>
                {current === 1 && images && images.length > 0 && (
                    <ImageCarousel images={images} />
                )}

                <div>
                    <h2>About</h2>
                    {Array.isArray(about) ? (
                        about.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))
                    ) : (
                        <p>{about}</p>
                    )}
                </div>

                <h2>Objectives</h2>
                {objectives && objectives.length > 0 ? (
                    objectives.map((objective, index) => (
                        <p key={index}>{objective}</p>
                    ))
                ) : (
                    <p>No objectives found</p>
                )}

                {Teammembers && Teammembers.length > 0 && (
                    <>
                        <h2>Team Members</h2>
                        {Teammembers.map((teamMember, index) => (
                            <p key={index}>{teamMember}</p>
                        ))}
                    </>
                )}

                {members && members.length > 0 && (
                    <>
                        <h2>{current === 1 ? 'Faculties' : 'Members'}</h2>
                        <div>
                            {members.map((member, index) => (
                                <div key={index}>
                                    <p className='titleBold'>{member.name}</p>
                                    <p>{member.designation}</p>
                                    <p>{member.address}</p>
                                    <p>{member.email}</p>
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
