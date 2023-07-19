import { StackContext } from "sst/constructs";
import { Bucket } from "aws-cdk-lib/aws-s3"

export function ExampleStack({ stack }: StackContext) {
  // Add your first construct
  new Bucket(this, "Bucket")
}
