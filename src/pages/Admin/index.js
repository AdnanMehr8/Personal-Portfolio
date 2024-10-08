import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import Experiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';

const { TabPane } = Tabs;

const tabStyle = {
    color: 'white',
};

const buttonStyle = {
    backgroundColor: '#1a1a1a',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginLeft: '10px',
    fontSize: '16px',
    textDecoration: 'none'
};

const Admin = () => {
    const { portfolioData } = useSelector((state) => state.root);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            window.location.href = "admin-login";
        }
    }, []);

    return (
        <div>
            <Header />
            <div className='flex gap-10 items-center px-5 py-2 justify-between'>
                <div className='flex gap-10 items-center'>
                    <h1 className='text-3xl text-white'>Portfolio Admin</h1>
                    <button
                        style={buttonStyle}
                        onClick={() => {
                            localStorage.removeItem("token");
                            window.location.href = "/admin-login";
                        }}
                    >
                        Log Out
                    </button>
                </div>
                {/* The div for visual separation */}
                <div className='w-60 h-[1px] bg-gray-500'></div>
            </div>
            {portfolioData && (
                <div className='px-5 text-white pb-10'>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span style={tabStyle}>Intro</span>} key="1">
                            <AdminIntro />
                        </TabPane>
                        <TabPane tab={<span style={tabStyle}>About</span>} key="2">
                            <AdminAbout />
                        </TabPane>
                        <TabPane tab={<span style={tabStyle}>Experiences</span>} key="3">
                            <Experiences />
                        </TabPane>
                        <TabPane tab={<span style={tabStyle}>Projects</span>} key="4">
                            <AdminProjects />
                        </TabPane>
                        <TabPane tab={<span style={tabStyle}>Courses</span>} key="5">
                            <AdminCourses />
                        </TabPane>
                        <TabPane tab={<span style={tabStyle}>Contact</span>} key="6">
                            <AdminContact />
                        </TabPane>
                    </Tabs>
                </div>
            )}
        </div>
    );
};

export default Admin;
