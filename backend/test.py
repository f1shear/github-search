
import requests
import json

# Reference: https://developer.github.com/v3/search/#search-repositories

SEARCH_URL = 'https://api.github.com/search/repositories'

def search_repos(q, page, per_page, sort):
	payload = {'q':q,'page':page,'per_page':per_page, 'sort': sort}
	r = requests.get(SEARCH_URL, params=payload)
	data = json.loads(r.text)
	return data


def print_item(item):
	print '\n'
	print 'Id : %s' % item['id']
	print 'Name: %s \t\t Forks: %s Stars: %s' % (item['name'], item['forks'], item['stargazers_count'])
	print 'Description: %s' % item['description']
	print 'Html URL: %s' % item['html_url']

def test_search():
	q = 'angular'
	page = 1
	per_page = 100
	sort = 'forks'
	data = search_repos(q, page, per_page, sort)

	assert('items' in data)
	assert('total_count' in data)
	print 'Found %s results' % data['total_count']
	
	item = data['items'][0]
	print 'Printing first item as sample'
	print_item(item)
if __name__ == "__main__":
	test_search()

