// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import './style.scss';
import features from './assets/features.png';
import V2iOS from './assets/V2iOS.jpg';
import summitRetro from './assets/firebase-summit-retro.png';

// Require CSS
require('normalize.css');


const theme = createTheme(
  {
    primary: '#039be5',
    secondary: '#ffca28',
    tertiary: '#FFFFFF',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="primary">
          <Image className="me" src="https://avatars2.githubusercontent.com/u/5880029?s=460&v=4" height="170" width="170" />
          <Text margin="40px 0 20px" textColor="tertiary" textSize={24}>
            Julien Robidet
          </Text>
          <Link href="https://twitter.com/JulienRobidet" textSize={18} textColor="secondary">@JulienRobidet</Link><br />
          <Link href="" textSize={18} textColor="secondary">julien.robidet@decathlon.com</Link>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Image src={V2iOS} />
        </Slide>

        {/* <Slide transition={['fade']} bgColor="primary">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YKZ6rP4kwV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Slide> */}

        <Slide transition={['slide']} bgColor="primary">
          <Image src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" width="124" height="202" />
          <Text caps lineHeight={1} textColor="secondary">
            Summit 2019
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            - MADRID -
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Image src={summitRetro} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading margin="0px 0 60px" size={1} textColor="secondary" caps>
            What's Firebase ?
          </Heading>
          <Heading size={6} textColor="tertiary">
            Build apps fast
          </Heading>
          <Heading size={6} textColor="tertiary">
            Google infrastructure
          </Heading>
          <Heading size={6} textColor="tertiary">
            One platform
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Image src={features} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading margin="0px 0 60px" size={1} textColor="secondary" caps>
            What's new ?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            App Distribution
          </Heading>
          <br />
          <BlockQuote>
            <Quote textColor="secondary">Instantly install the build and test without installing any SDK...</Quote>
          </BlockQuote>
          <List>
            <ListItem>Cross-platform (iOS/Android)</ListItem>
            <ListItem>Fast (no SDK to install)</ListItem>
            <ListItem>Manually / Firebase CLI / Fastlane / Graddle</ListItem>
            <ListItem>Manage testers</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Rollouts for Config Remote
          </Heading>
          <List>
            <ListItem>Show/Hide features in demand</ListItem>
            <ListItem>For segments of your user base (app version, Analytics audience, language...)</ListItem>
            <ListItem>Run A/B tests</ListItem>
            <ListItem>Compare versions in Crashlytics by feature</ListItem>
            <ListItem>Web!</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Test Lab
          </Heading>
          <List>
            <ListItem>Real devices (iOS, Android)</ListItem>
            <ListItem>Logs, Screenshot and videos</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            And what about Web(app) ?
          </Heading>
          <List>
            <ListItem>Google Analytics</ListItem>
            <ListItem>Cloud Messaging (Specific for browsers, OS, audience base)</ListItem>
            <ListItem>Remote Config (simple config to complex audience)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Local Emulator Suite
          </Heading>
          <List>
            <ListItem>Cloud Firestore / Realtime DB / Functions / Hosting</ListItem>
            <ListItem>Connect your app to these emulators to perform integration testing or QA without touching production data</ListItem>
            <ListItem>Android SDK	 / iOS SDK / Web SDK / Node.js Admin SDK</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Firebase Extensions
          </Heading>
          <List>
            <ListItem>Pre-packaged bundles of code designed to automate common tasks</ListItem>
            <ListItem>Resize Images, Translate Text, Sync with MailChimp, Trigger Email, Export Collections To BigQuery, Shorten URLs, Distributed Counter, ...</ListItem>
            <ListItem>Open-source</ListItem>
            <ListItem><Link href="https://github.com/firebase/extensions" textColor="secondary">https://github.com/firebase/extensions</Link></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Auto ML Vision Edge
          </Heading>
          <List>
            <ListItem>Technology from Google</ListItem>
            <ListItem>Easy to use</ListItem>
            <ListItem>Automaticaly create, train, optimize models on Firebase</ListItem>
            <ListItem>No ML expertise required</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Predictions
          </Heading>
          <List>
            <ListItem>ML to create dynamic user segments</ListItem>
            <ListItem>Remote Config, Notifications composer, Firebase In-App Messaging, A/B Testing</ListItem>
            <ListItem>Provide a custom experience based on each of your users' anticipated needs</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
