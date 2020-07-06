const express = require('express');
const Monk = require('monk');

const db = Monk(process.env.mongo_url);
const sessions = db.get('sessions');