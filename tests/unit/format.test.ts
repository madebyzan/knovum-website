import { describe, expect, it } from "vitest";

import { formatDate, formatFileSize, formatOrdinal } from "@/lib/format";

describe("formatOrdinal", () => {
  it("numbers items from 01", () => {
    expect([0, 1, 9, 10].map(formatOrdinal)).toEqual(["01", "02", "10", "11"]);
  });
});

describe("formatDate", () => {
  // Late in the UTC day: a local time zone ahead of UTC would already be on the next date.
  const date = new Date("2026-11-02T23:30:00Z");

  it("formats in the reader's language", () => {
    expect(formatDate(date, "en")).toBe("November 2, 2026");
    expect(formatDate(date, "zh-CN")).toBe("2026年11月2日");
  });
});

describe("formatFileSize", () => {
  it("rounds to whole decimal megabytes", () => {
    expect(formatFileSize(118_734_848, "en")).toBe("119 MB");
    expect(formatFileSize(97_517_568, "zh-CN")).toBe("98 MB");
  });
});
