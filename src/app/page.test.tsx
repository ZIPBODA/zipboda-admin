import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import DsCheck from "./ds-check/page";

describe("관리자 기본 화면", () => {
  it("홈은 화면 기획 확정 전이라 제목과 안내만 보여 준다", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1, name: "집보다 관리자" })).toBeInTheDocument();
  });

  it("공유 디자인시스템(@zipboda/ui) 컴포넌트가 테스트 환경에서도 그려진다", () => {
    render(<DsCheck />);
    expect(screen.getByRole("button", { name: "Primary" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();
  });
});
