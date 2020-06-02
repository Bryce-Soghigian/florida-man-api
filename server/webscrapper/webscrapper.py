import requests
import urllib.request
import time
from bs4 import BeautifulSoup
import re
import json


"""
1. Write functions for each site I want to scrape
2. Write a master function that runs all of those functions everyday to check for updated stories


Each of these functions that webscrape need to get three things

1. A title of an article
2. Some content of an article
3. the url that we are webscrapping from

then we need to post the data we get to my api

"""
TAG_RE = re.compile(r'<[^>]+>')
def remove_tags(text):
    return TAG_RE.sub('',text)
def alternateFloridaScrapper():
    url = "https://floridanewsheadlines.com/articles/florida-man/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text,"html.parser")
    article = soup.select("div.content-column")
    print(article)


def floridaNewsScrapper():
    url = "https://floridanewsheadlines.com/articles/florida-man/"
    response = requests.get(url)
    print(f"resource was accessed with a status of {response}")
    soup = BeautifulSoup(response.text,"html.parser")
    # print(soup.findAll('h4'))
    print("===========")
    titles = soup.select("h4.article-title")
    content = soup.select("div.content")
    list(titles)
    list(content)
    newContent = []
    newTitles = []
    for index in range(len(content)):
        newContent.append(remove_tags(str(content[index])))
        newTitles.append(remove_tags(str(titles[index])))
        print(newContent)
    for index in range(len(newContent)):
        requests.post("http://localhost:5555/stories/",json={"storyTitle":newTitles[index+2],"storyContent":newContent[index-1],"storySource":str(url)})
        # print("status code:" response.status_code)
        
    # for index in range(len(content)-1):
    #     # print(index)
    #     # print(titles[index-1],content[index])
    #     # print()

    #     # requestObject = {"storyTitle":titles[index],"storyContent":content[index],"storySource":url}
    #     # requests.post("http://localhost:5555/stories/",requestObject)
    
def main():
    alternateFloridaScrapper()
    # floridaNewsScrapper()

main()
