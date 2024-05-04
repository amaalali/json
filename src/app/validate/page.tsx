"use client"

import { Textarea } from "#components/ui/textarea.tsx";
import { cn } from "#lib/utils.ts";
import { Dispatch, SetStateAction, useState } from "react";


type ValidationResultType = null | boolean

function Result({ result }: { result: ValidationResultType }) {
  console.log(result)
  return (result === null)
    ? <div>Pending</div>
    : result
      ? <div>JSON is valid :)</div>
      : <div>Invalid JSON</div>
}

function Controls({ result }: { result: ValidationResultType }) {
  return (
    <>
      <div className={cn("grid gap-2")}>
        <span className="text-xl font-medium">Result</span>
        <Result result={result} />
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
    <main className={cn("grid mx-32 my-8 items-stretch gap-8 md:grid-cols-[1fr_200px] h-full min-h-screen")} >
      <div className={cn("md:order-2")}>
        <Controls result={validationResult} />
      </div>

      <div className={cn("md:order-1 h-full")} >
        <div className={cn("flex flex-col space-y-4 h-full box-border")} >
          <Textarea
            placeholder="Enter text to validate as JSON"
            className={cn("flex-1 box-border")}
            onChange={({ target: { value } }) => validateAsJson(setValidationResult, value)}
          />
        </div>
      </div>
    </main>
  )

}
