import React from "react"

type PurposeCardProps = {
  title: string
  headline?: string
  subtitle?: string
  description?: string | string[]
  values?: { title: string; description: string | string[] }[]
}

const formatText = (text: string) => {
  return text.split(/\n|<br\s*\/?>/g).map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== text.split(/\n|<br\s*\/?>/g).length - 1 && <br />}
    </React.Fragment>
  ))
}

const formatDescription = (description: string | string[]) => {
  if (Array.isArray(description)) {
    return (
      <ul className="mt-10 space-y-6">
        {description.map((item, index) => (
          <li
            key={index}
            className="leading-relaxed md:leading-[160%] md:text-[22px] font-normal flex items-start"
          >
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p className="mt-10 leading-relaxed md:leading-[250%] md:text-lg">
      {formatText(description)}
    </p>
  )
}

const PurposeCard = ({
  title,
  headline,
  subtitle,
  description,
  values,
}: PurposeCardProps) => {
  return (
    <li className="md:mt-16 md:flex justify-start md:space-x-20 border-b-2 pb-16">
      <div className="md:w-[400px] relative">
        <h3 className="text-3xl md:text-5xl font-en leading-relaxed md:leading-[64px] mt-10 md:mt-0 tracking-[0.03em] text-accentColor font-lato">
          {formatText(title)}
        </h3>
      </div>
      {values ? (
        <ul className="md:w-[720px] space-y-10">
          {values.map((value, index) => (
            <li key={index}>
              <h4 className="text-lg md:text-[22px] leading-relaxed md:leading-[160%] mt-10 md:mt-0 text-accentColor">
                {formatText(value.title)}
              </h4>
              {formatDescription(value.description)}
            </li>
          ))}
        </ul>
      ) : (
        <div className="md:w-[720px]">
          <h4 className="text-3xl md:text-5xl font-[300] leading-relaxed md:leading-[64px] mt-10 md:mt-0">
            {headline && formatText(headline)}
          </h4>
          <h4 className="text-3xl md:text-[22px] font-semibold leading-relaxed md:leading-[160%] mt-10 md:mt-0">
            {subtitle && formatText(subtitle)}
          </h4>
          {description && formatDescription(description)}
        </div>
      )}
    </li>
  )
}

export default PurposeCard
