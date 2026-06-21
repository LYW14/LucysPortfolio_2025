import React from 'react';
import { CONTACT_INFO } from './constants';

export const MoreWindow: React.FC = () => (
  <div>
    <h3 className="text-lg font-bold mb-3">👋 Hey there!</h3>
    <p className="mb-3">Thanks for wanting to learn more!</p>

    <div className="space-y-4">
      <div className="p-3 bg-white rounded border">
        <strong>About this site:</strong>
        <p className="mt-2">
          I wanted to create a website that was a little reminiscent of the Internet in the 2000s.
          Do you remember the first few times you ever got to use the Internet? Or play a game on
          the World Wide Web? Back then, I felt like I always wanted to tinker with everything and
          hover over every pixel to see what I could click on.
        </p>
        <p className="mt-2">
          I wanted to try to create a personal site that both felt personal and made you <em>want</em> to
          explore. This website doesn't tell everything about me — in fact, there's more than a few
          things I left out (either by choice or they're coming soon) — but I hope it made you
          curious to learn more!
        </p>
        <p className="mt-2">
          Outside of class projects, this is my first attempt at a personal website. While it's not
          perfect and it's still a work in progress, I'm looking forward to adding more and revamping
          it with other ideas in the future!
        </p>
      </div>

      <div className="p-3 bg-blue-50 rounded border border-blue-200">
        <strong>Let me know what you think!</strong>
        <p className="mt-2">You can send me a message at either of these emails:</p>
        <div className="mt-2 space-y-1">
          <div>📧 {CONTACT_INFO.EMAIL}</div>
          <div>📧 {CONTACT_INFO.PERSONAL_EMAIL}</div>
        </div>
        <p className="mt-2">Or check out my GitHub!</p>
        <div className="mt-2">
          <a href={CONTACT_INFO.GITHUB} target="_blank" rel="noreferrer">
            {CONTACT_INFO.GITHUB}
          </a>
        </div>
      </div>
    </div>
  </div>
);