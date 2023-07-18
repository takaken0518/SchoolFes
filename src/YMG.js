import './App.css';
import Header from './Header';
import Splash from './Splash';
import Splash_text from './Splash_text';
import VoteSystem from './VoteSystem';
import Top from './Top';

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function SplashScreen(){

  //スプラッシュスクリーン表示
  return (
    <div>
    <Splash/>
    <Splash_text/>
    </div>
  )
}

function VoteScreen(){
  
  //投票画面の表示
  return (
    <div>
      <Header/>
      <VoteSystem/>
    </div>
  );

}

function TopScreen(){
  
  //TOP画面の表示
  return (
    <div>
      <Header/>
      <Top/>
    </div>
  );

}

function MenuScreen(){

    //メニュー画面の表示
    return (
      <div>
        <Header/>
      </div>
    );

}

function YMG() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5300);

    return () => clearTimeout(timer);
  }, []);

  // ルーティングの定義
  return (
    <Router>
      <Routes>
        <Route path="/" element={showSplash ? <SplashScreen /> : <Navigate to="/top" />} />
        <Route path="/top" element={<TopScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/vote" element={<VoteScreen />} />
      </Routes>
    </Router>
  );
}

export default YMG;