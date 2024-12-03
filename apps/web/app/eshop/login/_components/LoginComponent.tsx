"use client";

import { EmailButtons } from "components/EmailButtons/EmailButtons";
import { useState } from "react";
import Form from "./Form";

export default function LoginComponent() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? <EmailButtons /> : <Form setSubmitted={setSubmitted} />;
}
