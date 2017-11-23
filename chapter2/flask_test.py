#!/usr/bin/env python
# coding=utf-8

from app import app
import unittest


class FlaskappTests(unittest.TestCase):
    def setUp(self):
        # 创建一个测试客户端
        self.app = app.test_client()
        # 将异常传递给测试客户端
        self.app.testing = True

    def test_users_status_code(self):
        # 发送HTTP GET请求到应用
        result = self.app.get('/api/v1/users')
        # 断言相应的状态码
        self.assertEqual(result.status_code, 200)

    def test_addusers_status_code(self):
        # 发送HTTP POST请求到应用
        result = self.app.post(
            '/api/v1/users',
            data='{"username": "manish23445", "email":\
            "manishtest124@gmail.com", "password": "test1235"}',
            content_type='application/json')
        # 断言相应的状态码
        print(result)
        self.assertEqual(result.status_code, 201)

    def test_updusers_status_code(self):
        # 发送HTTP PUT请求到应用
        result = self.app.put(
            '/api/v1/users/2',
            data='{"password": "testing1234"}',
            content_type='application/json')
        # 断言相应的状态码
        print(result)
        self.assertEqual(result.status_code, 200)

    def test_tweets_status_code(self):
        # 发送HTTP GET请求到应用
        result = self.app.get('/api/v2/tweets')
        # 断言相应的状态码
        self.assertEqual(result.status_code, 200)

    def test_addtweets_status_code(self):
        # 发送HTTP POST请求到应用
        result = self.app.post(
            '/api/v2/tweets',
            data='{"username": "manish23445", "body":\
            "Wow! Is it working #testing"}',
            content_type='application/json')
        # 断言相应的状态码
        self.assertEqual(result.status_code, 201)

    def test_delusers_status_code(self):
        # 发送HTTP Delete 请求到应用
        result = self.app.delete(
            '/api/v1/users',
            data='{"username": "manish22"}',
            content_type='application/json')
        # 断言相应的状态码
        print(result)
        self.assertEqual(result.status_code, 200)
