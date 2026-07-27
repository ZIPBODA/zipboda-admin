# 집보다(Zipboda) Admin — 프로젝트 가이드

집보다 **운영 관리자 콘솔**. 청약 공고·데이터 연계·평면도/3D 자산·콘텐츠·회원·커뮤니티·알림·통계·감사, 2차 상품/주문을 관리.

## 스택
- React + **Vite (SPA)** + TypeScript, **Feature-Sliced Design**
- 서버 상태 TanStack Query, 응답 엔벌로프 `{success, data, error}`
- 권한 **RBAC**(ITF-012: 운영자/관리자), 서버 인가 강제. 모든 변경 액션 **감사 로그** 기록

## 산출물 단일 진실원
요구사항/화면/API xlsx 3종은 **zipboda-web/docs에서 대표 관리**. 본 저장소는 개발계획서(md)만 보유. 스펙 참조 시 `../zipboda-web/docs/` 사용.
> 관리자 화면은 Figma 부재로 도출됨 — 구현 전 화면 기획 확정(개발계획서 S0 게이트) 필요.

## 규칙 (반드시 준수)
@.claude/rules/frontend-rule.md
@.claude/rules/frontend-architecture.md
@.claude/rules/code-organization.md
@.claude/rules/contributing-role.md
@.claude/rules/document-template-rule.md
@.claude/rules/phase-review-rule.md
@.claude/rules/test-guide.md
@.claude/rules/unclear-rule.md

## 보안
- 비밀값은 `.env`(gitignore)에만. `.mcp.json`은 `${FIGMA_API_KEY}` 참조. 실제 토큰 커밋 금지.
