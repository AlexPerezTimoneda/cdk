import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myFunction = new lambda.Function(this, "HelloWorldFunction", {
      runtime: lambda.Runtime.NODEJS_20_X, // Provide any supported Node.js runtime
      handler: "index.handler",
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          return {
            statusCode: 200,
            body: JSON.stringify('Hello World!'),
          };
        };
      `),
    });

   // Crear API Gateway REST API
    const api = new apigateway. LambdaRestApi(this, "HelloApi", {
    handler: myFunction,
    proxy: true, // permite enrutar todos los métodos a Lambda
    });

    // Output con la URL de la API
    new cdk.CfnOutput(this, "ApiUrl", {
      value: api.url,
    });
    }

  }

