#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { HelloCdkStack } from '../lib/hello-cdk-stack';

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack', {
env: { account: '971422716475', region: 'eu-south-2' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});