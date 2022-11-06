import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components

// import Navbar from 'components/Navbars/AuthNavbar.js';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import FooterSmall from 'components/Footers/FooterSmall.js';

// survey pages
import first from 'views/SurveyItems/1SurveyVoting.js';
import survey_second from 'views/SurveyItems/2SurveyVoting.js';
import survey_three from 'views/SurveyItems/3Survey.js';
import survey_four from 'views/SurveyItems/4Survey.js';
import survey_five from 'views/SurveyItems/5Survey.js';
import survey_six from 'views/SurveyItems/6Survey.js';
import survey_seven from 'views/SurveyItems/7Survey.js';
import survey_eight from 'views/SurveyItems/8Survey.js';

export default function Survey() {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <section className="header relative pt-16 items-center flex h-screen">
          <Switch>
            <Route path="/survey/1" exact component={first} />
            <Route path="/survey/2" exact component={survey_second} />
            <Route path="/survey/3" exact component={survey_three} />
            <Route path="/survey/4" exact component={survey_four} />
            <Route path="/survey/5" exact component={survey_five} />
            <Route path="/survey/6" exact component={survey_six} />
            <Route path="/survey/7" exact component={survey_seven} />
            <Route path="/survey/8" exact component={survey_eight} />
            <Redirect from="/survey" to="/survey/1" />
          </Switch>
        </section>
        <FooterSmall />
      </main>
    </>
  );
}
