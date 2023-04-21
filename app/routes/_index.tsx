import type { V2_MetaFunction } from "@remix-run/node";

import { Amplify } from "aws-amplify";
import { AmplifyConfig } from "../config/Config";
import { Authenticator } from "@aws-amplify/ui-react";
import { GraphiQL } from "graphiql";

Amplify.configure(AmplifyConfig);

export const meta: V2_MetaFunction = () => {
  return [{ title: "Graphiql Explorer" }];
};

export default function Index() {
  return (
    <Authenticator
      signUpAttributes={["email", "phone_number", "name"]}
      loginMechanisms={["email"]}
    >
      <GraphiQL fetcher={() => {}} />
    </Authenticator>
  );
}
