/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `${'/(root)'}${'/(taps)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/index` | `/index`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}/properties/[id]` | `/properties/[id]`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/sign-up` | `/sign-up`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/tap_test1` | `/tap_test1`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `${'/(root)'}${'/(taps)'}/explore` | `/explore`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/index` | `/index`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/profile` | `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(root)'}/properties/[id]` | `/properties/[id]`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/sign-up` | `/sign-up`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/tap_test1` | `/tap_test1`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `${'/(root)'}${'/(taps)'}/explore${`?${string}` | `#${string}` | ''}` | `/explore${`?${string}` | `#${string}` | ''}` | `${'/(root)'}${'/(taps)'}/index${`?${string}` | `#${string}` | ''}` | `/index${`?${string}` | `#${string}` | ''}` | `${'/(root)'}${'/(taps)'}/profile${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `${'/(root)'}/properties/[id]${`?${string}` | `#${string}` | ''}` | `/properties/[id]${`?${string}` | `#${string}` | ''}` | `${'/(root)'}${'/(taps)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(root)'}${'/(taps)'}/sign-up${`?${string}` | `#${string}` | ''}` | `/sign-up${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/explore${`?${string}` | `#${string}` | ''}` | `/explore${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/tap_test1${`?${string}` | `#${string}` | ''}` | `/tap_test1${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `${'/(root)'}${'/(taps)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/index` | `/index`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}/properties/[id]` | `/properties/[id]`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(taps)'}/sign-up` | `/sign-up`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/tap_test1` | `/tap_test1`; params?: Router.UnknownInputParams; };
    }
  }
}
