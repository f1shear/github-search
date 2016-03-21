from __future__ import print_function

import boto3
import json
import requests

print('Loading function')

SEARCH_URL = 'https://api.github.com/search/repositories'


def search_repos(q, page, per_page, sort):
    payload = {'q': q, 'page': page, 'per_page': per_page, 'sort': sort}
    r = requests.get(SEARCH_URL, params=payload)
    data = json.loads(r.text)
    return data


def lambda_handler(event, context):
    '''Provide an event that contains the following keys:

      - operation: one of the operations in the operations dict below
      - tableName: required for operations that interact with DynamoDB
      - payload: a parameter to pass to the operation being performed
    '''
    print("Too Exhaustive")
    print("Received event: " + json.dumps(event, indent=2))
    resp = {'success': False, 'items': [], 'total_count': 0}

    resp['event'] = event

    query = event['query']
    q = query.get('q', None)
    page = query.get('page', 1)
    per_page = query.get('per_page', 100)
    sort = query.get('sort', 'forks')

    if q is not None:
        try:
            data = search_repos(q, page, per_page, sort)
            resp['items'] = data['items']
            resp['total_count'] = data['total_count']
            resp['success'] = True
        except Exception as e:
            resp['error'] = str(e)
    else:
        resp['error'] = 'No query'

    return resp
