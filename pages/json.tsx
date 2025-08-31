import React from "react";
import portfolio from "../lib/data/profile.json";
import { Any } from "@/lib/type";

export default function JsonPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formatJsonValue = (value: Any, _: string = ""): React.JSX.Element => {
    if (value === null) {
      return (
        <span className="text-purple-400 text-base font-medium">null</span>
      );
    }

    if (typeof value === "string") {
      return (
        <span className="text-yellow-300 text-base font-medium">
          &quot;{value}&quot;
        </span>
      );
    }

    if (typeof value === "number") {
      return (
        <span className="text-blue-400 text-base font-medium">{value}</span>
      );
    }

    if (typeof value === "boolean") {
      return (
        <span className="text-green-400 text-base font-medium">
          {value.toString()}
        </span>
      );
    }

    if (Array.isArray(value)) {
      return (
        <span>
          <span className="text-gray-400">[</span>
          {value.map((item, index) => (
            <span key={index} className=" whitespace-nowrap">
              {index > 0 && <span className="text-gray-400">, </span>}
              {formatJsonValue(item)}
            </span>
          ))}
          <span className="text-gray-400">]</span>
        </span>
      );
    }

    if (typeof value === "object") {
      return (
        <span>
          <span className="text-gray-400">{"{"}</span>
          {Object.entries(value).map(([k, v], index) => (
            <div key={k} className="ml-4">
              <br />
              <span className="text-cyan-300 text-sm">&quot;{k}&quot;</span>
              <span className="text-gray-400">: </span>
              {formatJsonValue(v, k)}
              {index < Object.entries(value).length - 1 && (
                <span className="text-gray-400">,</span>
              )}
            </div>
          ))}
          <br />
          <span className="text-gray-400">{"}"}</span>
        </span>
      );
    }

    return <span>{String(value)}</span>;
  };

  return (
    <div className="min-h-screen text-green-400 font-mono p-8">
      <div className="">
        <h1 className="text-xl font-bold mb-6 text-cyan-400   pb-2">
          $ cat portfolio.json
        </h1>
        <div className="p-6 ">
          <pre className="text-sm leading-relaxed overflow-x-auto">
            <code>{formatJsonValue(portfolio)}</code>
          </pre>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          <span className="bg-gray-800 px-2 py-1 rounded">ESC :q!</span> to exit
        </div>
      </div>
    </div>
  );
}
