import { Aspects } from 'aws-cdk-lib';
import { AwsSolutionsChecks } from "cdk-nag"
import { SSTConfig } from "sst";
import { ExampleStack } from "./stacks/ExampleStack";

export default {
  config(_input) {
    return {
      name: "sst-cdk-nag-demo",
      region: "us-east-1",
    };
  },
  stacks(app) {
    Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }))
    app.stack(ExampleStack);
  }
} satisfies SSTConfig;
