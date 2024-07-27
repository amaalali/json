"use client"

import { Textarea } from "#components/ui/textarea.tsx";
import { cn } from "#lib/utils.ts";
import { Dispatch, SetStateAction, useState } from "react";

type ValidationResultType = null | boolean

function Result({ result }: { result: ValidationResultType }) {
  const message = (result === null)
    ? <div>Pending</div>
    : result
      ? <div>JSON is valid :)</div>
      : <div>Invalid JSON</div>

  return (
    <>
      <div className={cn("grid gap-2")}>
        <span className="text-xl font-medium">Result</span>
        <div>{message}</div>
      </div>
    </>
  )
}

function initValidationResultState(): ValidationResultType {
  return null;
}

function validateAsJson(stateUpdater: Dispatch<SetStateAction<ValidationResultType>>, text: string): undefined {
  if (!text.trim()) {
    stateUpdater(null)
    return;
  }

  try {
    JSON.parse(text)
    stateUpdater(true)
  } catch (error) {
    stateUpdater(false)
  }
}


export default function Validator() {
  const [validationResult, setValidationResult] = useState(initValidationResultState)

  return (
    <div className={cn("grid mx-8 md:mx-32 my-8 gap-4 md:gap-10 md:grid-cols-[3fr_1fr]")} >
      <div className="md:order-1">
        <Textarea
          placeholder="Enter text to validate as JSON"
          className="my-auto h-[80dvh]"
          onChange={({ target: { value } }) => validateAsJson(setValidationResult, value)}
        />
      </div>

      <div className="md:order-2">
        <Result result={validationResult} />
      </div>
    </div>
  )
}
