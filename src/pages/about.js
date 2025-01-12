import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const About = () => (
    <Layout>
        <Seo title="About Lanyon" />

        <h1>About</h1>

        <p className="message">
            Hey there! This page is included as an example. Feel free to customize it for your own use upon downloading. Carry on!
        </p>
        <p>
            In the novel, <em>The Strange Case of Dr. Jeykll and Mr. Hyde</em>, Mr. Poole is Dr. Jekyll's virtuous and loyal butler. Similarly, Poole is an upstanding and effective butler that helps you build Jekyll themes. It's made by <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
        <p>
            There are currently two themes built on Poole:
        </p>
        <ul>
            <li><a href="http://hyde.getpoole.com">Hyde</a></li>
            <li><a href="http://lanyon.getpoole.com">Lanyon</a></li>
        </ul>
        <p>
            Learn more and contribute on <a href="https://github.com/poole">GitHub</a>.
        </p>

        <h2>Setup</h2>
        <p>
            Some fun facts about the setup of this project include:
        </p>
        <ul>
            <li>Built for <a href="http://jekyllrb.com">Jekyll</a></li>
            <li>Developed on GitHub and hosted for free on <a href="https://pages.github.com">GitHub Pages</a></li>
            <li>Coded with <a href="http://jekyllrb.com">Visual Studio Code</a>, an amazing code editor</li>
            <li>Designed and developed while listening to music like <a href="https://soundcloud.com/maddecent/sets/blood-bros-series">Blood Bros Trilogy</a></li>
        </ul>
        <p>
            Have questions or suggestions? Feel free to <a href="https://github.com/poole/issues/new">open an issue on GitHub</a> or <a href="https://twitter.com/mdo">ask me on Twitter</a>.
        </p>
        <p>
            Thanks for reading!
        </p>
    </Layout>
)

export default About;