// ==UserScript==
// @name         Twitter/X 24-Hour Time
// @namespace    https://baduyifei.com
// @version      1.0.2
// @description  Convert Chinese AM/PM timestamps on Twitter/X web pages to 24-hour time.
// @author       baduyifei <baduyifei@gmail.com>
// @license      MIT
// @homepageURL  https://baduyifei.com
// @supportURL   https://baduyifei.com
// @updateURL    https://github.com/baduyifei/twitter-x-24h-time/releases/latest/download/twitter-x-24h-time.user.js
// @downloadURL  https://github.com/baduyifei/twitter-x-24h-time/releases/latest/download/twitter-x-24h-time.user.js
// @match        https://twitter.com/*
// @match        https://x.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const TIME_PATTERN = /(上午|下午)\s*(\d{1,2})[:：](\d{2})(?::(\d{2}))?/g;
  const TIME_TEST = /(上午|下午)\s*\d{1,2}[:：]\d{2}/;
  const SKIPPED_TAGS = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT']);

  function to24Hour(text) {
    return text.replace(TIME_PATTERN, (match, period, hourText, minute, second) => {
      let hour = Number.parseInt(hourText, 10);

      if (period === '上午') {
        if (hour === 12) hour = 0;
      } else if (hour !== 12) {
        hour += 12;
      }

      const time = `${String(hour).padStart(2, '0')}:${minute}`;
      return second ? `${time}:${second}` : time;
    });
  }

  function convertTextNode(node) {
    if (TIME_TEST.test(node.nodeValue)) {
      node.nodeValue = to24Hour(node.nodeValue);
    }
  }

  function walk(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      convertTextNode(node);
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE || SKIPPED_TAGS.has(node.tagName)) {
      return;
    }

    for (const child of node.childNodes) {
      walk(child);
    }
  }

  function start() {
    walk(document.body);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData') {
          convertTextNode(mutation.target);
          continue;
        }

        for (const node of mutation.addedNodes) {
          walk(node);
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  }

  if (document.body) {
    start();
  } else {
    window.addEventListener('DOMContentLoaded', start, { once: true });
  }
})();
