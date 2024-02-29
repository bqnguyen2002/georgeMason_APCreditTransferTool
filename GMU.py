#!/usr/bin/env python

import flask
import json

# Opening JSON file
f = open('APCredits.json')
 
# returns JSON object as 
# a dictionary
data = json.load(f)
 
# Iterating through the json
# list

ap_exams = []
for i in data['credit_transfer']:
    if(i['ap_exam'] not in ap_exams):
        ap_exams.append(i['ap_exam'])
 
# Closing file
f.close()

# Create the application.
APP = flask.Flask(__name__)

@APP.route('/')
def index():
    """ Displays the index page accessible at '/'
    """
    return flask.render_template('main.html', list=data, exams=ap_exams)

if __name__ == '__main__':
    APP.debug=True
    APP.run()