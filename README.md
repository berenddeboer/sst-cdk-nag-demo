# About

CDK nagging demo.

This should nag:

```sh
npm run build
```

If you have the properly patched SST you see:

```
npm run build

> sst-cdk-nag-demo@0.0.0 build
> sst build

[Error at /bdeboer-sst-cdk-nag-demo-ExampleStack/CustomResourceHandler/ServiceRole/Resource] AwsSolutions-IAM4[Policy::arn:<AWS::Partition>:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole]: The IAM user, role, or group uses AWS managed policies. An AWS managed policy is a standalone policy that is created and administered by AWS. Currently, many AWS managed policies do not restrict resource scope. Replace AWS managed policies with system specific (customer) managed policies.This is a granular rule that returns individual findings that can be suppressed with 'appliesTo'. The findings are in the format 'Policy::<policy>' for AWS managed policies. Example: appliesTo: ['Policy::arn:<AWS::Partition>:iam::aws:policy/foo'].

[Error at /bdeboer-sst-cdk-nag-demo-ExampleStack/CustomResourceHandler/Resource] AwsSolutions-L1: The non-container Lambda function is not configured to use the latest runtime version. Use the latest available runtime for the targeted language to avoid technical debt. Runtimes specific to a language or framework version are deprecated when the version reaches end of life. This rule only applies to non-container Lambda functions.

Error at /bdeboer-sst-cdk-nag-demo-ExampleStack/Bucket/Resource] AwsSolutions-S1: The S3 Bucket has server access logs disabled. The bucket should have server access logging enabled to provide detailed records for the requests that are made to the bucket.

[Error at /bdeboer-sst-cdk-nag-demo-ExampleStack/Bucket/Resource] AwsSolutions-S10: The S3 Bucket or bucket policy does not require requests to use SSL. You can use HTTPS (TLS) to help prevent potential attackers from eavesdropping on or manipulating network traffic using person-in-the-middle or similar attacks. You should allow only encrypted connections over HTTPS (TLS) using the aws:SecureTransport condition on Amazon S3 bucket policies.

Error: Found errors

Trace: Error: Found errors
    at processMetadataMessages (file:///Users/bdeboer/src/mpi/future-of-certification/adrs/sst-cdk-nag-demo/node_modules/sst/stacks/synth.js:106:19)
    at Module.synth (file:///Users/bdeboer/src/mpi/future-of-certification/adrs/sst-cdk-nag-demo/node_modules/sst/stacks/synth.js:64:9)
    at async Object.handler (file:///Users/bdeboer/src/mpi/future-of-certification/adrs/sst-cdk-nag-demo/node_modules/sst/cli/commands/build.js:11:20)
    at process.<anonymous> (file:///Users/bdeboer/src/mpi/future-of-certification/adrs/sst-cdk-nag-demo/node_modules/sst/cli/sst.js:58:17)
    at process.emit (node:events:525:35)
    at process.emit (node:domain:489:12)
    at process._fatalException (node:internal/process/execution:149:25)
    at processPromiseRejections (node:internal/process/promises:288:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:96:32)

Need help with this error? Post it in #help on the SST Discord https://sst.dev/discord
```
