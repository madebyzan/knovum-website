import type { ProjectLinkKey, SectionKey } from "@/config/navigation";
import type { CapabilityGroup, CapabilityId } from "@/data/capabilities";
import type { InstallerKind, Platform } from "@/lib/releases/installers";

/** A heading and the paragraph under it. */
export interface Passage {
  readonly title: string;
  readonly body: string;
}

type Four<T> = readonly [T, T, T, T];

/** A source shown as evidence for a claim. */
interface Evidence {
  readonly kind: string;
  readonly title: string;
}

/** A source an answer cites, with the place in it the citation points at. */
interface CitedSource extends Evidence {
  readonly at: string;
}

/** A step recorded in a result's trail, and what performed it. */
interface TrailStep {
  readonly action: string;
  readonly engine: string;
}

/** Something stored or run on the reader's own machine. */
interface LocalPart {
  readonly name: string;
  readonly detail: string;
}

/**
 * Every string a visitor reads, for one language. Fixed-length tuples and records keyed by the
 * site's own ids make a dictionary that is missing a step, a capability or an installer label fail
 * to type-check, so the languages cannot drift apart.
 */
export interface Dictionary {
  readonly meta: { readonly title: string; readonly description: string };

  readonly a11y: {
    readonly skipToContent: string;
    readonly primaryNavigation: string;
    readonly menu: string;
    readonly openMenu: string;
    readonly closeMenu: string;
    readonly productIllustration: string;
  };

  readonly nav: {
    readonly sections: Readonly<Record<SectionKey, string>>;
    readonly download: string;
  };

  readonly hero: {
    /** A short announcement of the latest release, linking to its notes. */
    readonly announcement: (version: string) => string;
    readonly releaseNotes: string;
    readonly title: readonly [string, string];
    readonly lead: string;
    readonly downloadAction: string;
    readonly sourceAction: string;
    readonly availability: string;
  };

  readonly canvas: {
    readonly space: string;
    readonly outline: string;
    readonly relation: string;
    readonly note: { readonly kind: string; readonly title: string; readonly body: string };
    readonly recording: {
      readonly kind: string;
      readonly title: string;
      readonly duration: string;
      readonly quote: string;
    };
    readonly capture: {
      readonly kind: string;
      readonly source: string;
      readonly title: string;
      readonly body: string;
    };
    readonly claim: { readonly kind: string; readonly text: string; readonly support: string };
    readonly document: {
      readonly kind: string;
      readonly title: string;
      readonly paragraphs: readonly [string, string];
      readonly trail: string;
      readonly trailDetail: string;
    };
  };

  readonly statement: string;

  /**
   * Each feature is a passage beside a specimen of the interface it describes. The specimens draw on
   * the sample Space under `canvas`, so only what is new to each one is here.
   */
  readonly features: {
    readonly title: string;
    readonly items: Four<Passage>;
    readonly structure: {
      readonly contradicts: string;
      readonly evidence: readonly [Evidence, Evidence, Evidence];
      readonly health: string;
      readonly healthDetail: string;
    };
    readonly citation: {
      /** Two sentences, each followed by its citation mark. */
      readonly answer: readonly [string, string];
      readonly sources: readonly [CitedSource, CitedSource];
      readonly changed: string;
    };
    readonly trail: {
      readonly inputs: string;
      readonly steps: string;
      readonly created: string;
      readonly actions: readonly [TrailStep, TrailStep];
      readonly note: string;
    };
    readonly privacy: {
      readonly device: string;
      readonly parts: Four<LocalPart>;
      readonly cloud: string;
      readonly optional: string;
      readonly boundary: string;
    };
  };

  readonly workflow: { readonly title: string; readonly steps: Four<Passage> };

  /** Counts are never written into copy: they are counted from `data/capabilities` and passed in. */
  readonly onDevice: {
    /** The kicker, with how many capabilities run on-device. */
    readonly kicker: (count: number) => string;
    readonly title: string;
    readonly lead: string;
    readonly groups: Readonly<Record<CapabilityGroup, Passage>>;
    readonly capabilities: Readonly<Record<CapabilityId, string>>;
    readonly listen: {
      readonly speaker: (number: number) => string;
      /** The three lines of the sample recording's transcript, timed in `data/sample`. */
      readonly lines: readonly [string, string, string];
    };
    readonly see: {
      readonly original: string;
      readonly upscaled: (factor: number) => string;
      /** The comparison slider's name. */
      readonly compare: string;
    };
    readonly find: {
      readonly query: string;
      /** The search mode the demo runs in. */
      readonly mode: string;
    };
    readonly composedModel: string;
    readonly note: string;
  };

  readonly providers: {
    readonly title: string;
    readonly body: string;
    readonly anyCompatible: string;
    readonly footnote: string;
  };

  readonly download: {
    readonly title: string;
    /** The release's version and date, and the terms it is offered on. */
    readonly body: (version: string, date: string) => string;
    readonly platforms: Readonly<Record<Platform, { readonly name: string; readonly requirement: string }>>;
    /** Each installer by the machine it is for, within its platform. */
    readonly installers: Readonly<Record<InstallerKind, string>>;
    /** Read out before each download link, whose visible text names only the machine. */
    readonly downloadFor: (platform: string) => string;
    readonly releaseNotes: string;
    readonly allReleases: string;
  };

  readonly footer: {
    readonly tagline: string;
    readonly productTitle: string;
    readonly projectTitle: string;
    readonly languageTitle: string;
    readonly links: Readonly<Record<ProjectLinkKey, string>>;
    readonly licenseNote: string;
  };

  readonly notFound: { readonly title: string; readonly body: string; readonly back: string };
}
