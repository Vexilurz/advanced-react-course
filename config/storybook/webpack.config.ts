import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import { type RuleSetRule } from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config?.resolve?.modules?.push(paths.src)
  config?.resolve?.extensions?.push('.ts', '.tsx')

  if ((config?.module?.rules) != null) {
    config?.module?.rules =
    config?.module?.rules?.map((rule: RuleSetRule) => {
      // eslint-disable-next-line
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }
      return rule
    })
  }

  config?.module?.rules?.push(buildSvgLoader())
  config?.module?.rules?.push(buildCssLoader(true))

  return config
}
