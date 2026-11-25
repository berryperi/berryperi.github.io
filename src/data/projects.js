export const projects = [
  {
    id: 'augraphics',
    category: '3D·그래픽',
    accent: 'cyan',
    name: 'AUGraphics',
    subtitle: 'AI 3D 아바타 그래픽 검수 시스템',
    period: '',      // 시작 시기 입력 (예: '2026.01 - 현재'). 비워 두면 화면에 표시하지 않음
    tag: 'Work',
    status: '운영 중',
    role: '단독 설계·개발·운영',
    form: 'C# 클라이언트 + Python 서버 + Hyper-V GPU VM',
    overview:
      '그래픽 검수자가 남긴 자연어 코멘트와 수정 이력을 결함 유형·업무 규칙·판정 기준으로 구조화하고, 그 지식으로 외주 아바타 리소스를 자동 판정·수정해 검수 리포트와 납품 폴더까지 만드는 사내 검수 시스템. 사람의 수정 기록이 쌓일 때마다 규칙을 고치고 전 세트를 회귀 평가하는 피드백 루프로 운영한다. 그래픽팀 여러 명이 클라이언트에서 동시에 요청하고, 처리는 서버의 GPU VM이 맡는다.',
    background:
      '1차 버전은 캐릭터툴 화면을 4각도로 캡처해 Qwen3-VL-32B로 결함을 찾는 방식이었다. 프롬프트 실험에서는 업스케일한 수정 후(정상) 이미지 73장 중 44장을 결함으로 판정(오답률 60.3%)할 만큼 오탐이 많았고, 이후 단독·좌우 비교 2단계 검사를 도입했다. 실제 검수 결함 대부분은 재질 ID 그리는 순서(알파 소팅), 피직 웨이트, 절단면 정점, 법선처럼 데이터 안에 원인이 있어서 사진만으로는 위치와 원인을 특정하기 어려웠다. LLM 에이전트(Claude)가 3ds Max 데이터를 직접 보게 하는 방식도 정답 37건으로 채점해 봤지만, 가장 높은 설정도 원인까지 맞힌 것은 16건이었다. 그래서 판정은 검수자가 실제로 고친 기록에서 뽑은 규칙 엔진이 맡고, LLM은 파츠 판단·수정 위치 표시처럼 시각 판단이 필요한 부분만 맡는 구조로 다시 설계했다.',
    metrics: [
      { value: '11', label: '단계 검수 파이프라인' },
      { value: '130+', label: '규칙 개정 이력' },
      { value: '400+', label: '회귀 대조 RGM 파츠' },
      { value: '6', label: '정답 비교 세트' },
      { value: '37', label: 'LLM 판정 정량 채점 행' },
    ],
    knowledge: [
      { title: '엔티티와 관계', desc: '아이템 코드(성별+번호) → 파츠(헤어·상의·하의·신발·한벌옷·얼굴) → 파일(.max·RGM·DDS) → 결함 → 수정 내역·요청 코멘트로 이어지는 관계를 정의했다. 같은 아이템의 파츠끼리 결과가 서로 영향을 주는 규칙도 이 관계 위에서 판정한다.' },
      { title: '자연어 코멘트 → 결함 분류 체계', desc: '검수자가 엑셀 비고에 쓴 자연어 코멘트를 원본·수정본 차이와 맞대어 결함 유형으로 정리했다. 자동 수정 유형은 50여 종이다.' },
      { title: '판정 규칙 스키마', desc: '판정 규칙을 같은 칸(유형·상태·판정 방법·수정 방법·도구·근거 파츠·비고 문구)으로 적는 스키마를 설계해 규칙 색인으로 관리했다. 초기에는 결함 유형 → 검출 결과 → 수정 스크립트 → 비고 문구를 카드 형태의 데이터(JSON)로 정의해 리포트를 생성했다.' },
      { title: '판정 기준값을 코드에서 분리', desc: '허리·목 절단면 정상 위치 규격, 파츠별 등록 수정 사례처럼 "무엇이 정답인가"에 해당하는 기준값은 코드가 아닌 데이터 파일로 두어, 기준이 바뀌어도 로직을 건드리지 않고 갱신한다.' },
      { title: '업무 규칙·암묵지 추출', desc: '검수자가 말로 하지 않던 기준을 규칙으로 꺼냈다. 예: 같은 아이템에 진짜 문제가 있으면 나머지 파츠는 업데이트 불가, 자동 수정과 요청은 정해진 문구로 구분, 사례가 1건뿐인 유형은 일반화하지 않고 후보로 쌓아 둔다.' },
      { title: '결과 스키마', desc: '파츠마다 수정(fixed)·요청(req)·구분·코멘트·증거 이미지·정점 단위 상세를 담는 결과 레코드를 정의하고, 리포트 엑셀과 납품 폴더는 이 레코드에서만 만들어지게 했다.' },
      { title: '시간에 따라 바뀌는 지식', desc: '규칙이 바뀔 때마다 버전(v1~v136), 사유, 근거 파츠, 영향 범위, 백업 위치를 기록한다. 어떤 판정이 언제 왜 바뀌었는지 되짚을 수 있다.' },
      { title: '품질 평가', desc: '검수자 결과를 정답으로 두고 파츠별 일치·미탐·오탐을 대조한다. 규칙을 바꿀 때마다 기존 세트 전체를 다시 돌려 결과 차이를 확인한 뒤에만 배포한다.' },
    ],
    architecture: [
      { title: '클라이언트', desc: 'C# WinForms. 압축 파일 드래그 업로드, 완료일·자동 수정 옵션, 3초 간격 진행률, 작업 이어보기, 결과 자동 수신·해제, 캐릭터툴 AVATAR 복사' },
      { title: '게이트웨이', desc: 'Python HTTP 서버. 작업 접수와 빈 VM 배정, 작업 장부, 결과 백업, 접속·거절 기록' },
      { title: '검수 VM', desc: 'Hyper-V + GPU 분할(GPU-P). 3ds Max 2020 배치와 캐릭터툴이 VM 안에서 돌고, VM 서비스가 파이프라인을 실행' },
      { title: '파이프라인', desc: '사본 → 파츠 덤프 → 알파 판정 → 종합 점검 → 규칙 스캔 → 리포트·자동 수정 → AVATAR 복사 → 엑셀 → 정답 비교 → 산출물 정리 → 캡처' },
    ],
    coreFeatures: [
      '3ds Max 배치(MaxScript)로 파츠 메쉬·재질·알파 슬롯·노드 구조를 덤프하고, 게임 RGM 바이너리를 직접 해석(정점·법선·피직 웨이트·뼈 오프셋·재질 ID)',
      '결함 판정 규칙: 캐릭터툴 출력 불가 파일, 좌우 반전 오브젝트, 알파 소팅, 허리·발목 절단면 정점과 피직, 앞목 하드 엣지, 모션 중 목걸이 파묻힘, 넘어짐 모션 소팅, 빈 오브젝트, 파일·폴더 위치',
      '자동 수정 후 재검증: RGM 직접 수정(정점 이동·웨이트·법선·재질 ID) 또는 Max 재추출 뒤 같은 검사를 다시 돌려, 통과하지 못하면 원본을 그대로 둠',
      '담당자가 쓰던 요청 엑셀 양식 그대로 리포트 작성: 구분 드롭다운·조건부 서식, 문제 위치 증거 이미지, 정점 단위 RGM 수정 상세 시트',
      '납품 폴더 자동 구성: 완료 / T3수정 / 사용불가 / JPG / 원본으로 나눠 전체 수량이 맞게 정리',
      '캐릭터툴 자동 촬영과 Claude 기반 판정(올인원 아이템 파츠 판단, 원본·수정본 사진의 수정 위치 박스 표시)',
      '진행률·일시정지·중지·재개, 결과 백업, 작업 이력 기록',
      'Python RGM 바이너리 파서(정점·면·재질 슬롯·Physique 웨이트·뼈 오프셋)와 DXT5 밉맵 알파 디코더 직접 구현',
      '넘어짐 모션 소팅 검출기: 모션 RGM을 프레임별로 포즈 변환한 뒤 6방향 z-버퍼 투영으로 피부가 옷 앞으로 튀어나오는 프레임·위치를 자동 탐지',
    ],
    decisions: [
      { title: 'LLM 판정을 먼저 정량 평가', desc: '도입 전에 Claude 4개 설정(Sonnet low·medium·high, Opus)이 정답 코멘트와 같은 원인을 짚는지 37건을 ◎(원인 일치)/○(부분)/✗로 채점했다. Opus 16/12/9, Sonnet high 9/12/16, low 0/0/37. 단독 판정으로는 부족하다는 근거로 규칙 엔진 + LLM 보조 구조를 정했다.' },
      { title: '화면 판정에서 데이터 판정으로', desc: '결함 원인이 대부분 데이터(재질 순서, 웨이트, 정점)에 있어서 캡처 대신 Max·RGM 데이터를 직접 읽는 쪽으로 바꿨다. 사진은 결과 확인과 증거 이미지에만 쓴다.' },
      { title: '사람의 수정 기록으로 규칙 수립', desc: '검수자의 자연어 코멘트와 수정본을 원본과 비교해 결함 유형·판정 기준·코멘트 문구 체계로 정리한다. 사례가 1건뿐인 유형은 일반 규칙으로 넓히지 않고 해당 파츠 등록 또는 요청 코멘트만 남겨 과적합을 막는다.' },
      { title: '규칙을 바꿀 때마다 전체 회귀 대조', desc: '한 세트에 맞춘 규칙이 다른 세트에서 오탐을 만들지 않도록, 변경마다 기존 세트 전체를 다시 돌려 결과 차이를 확인한다.' },
      { title: '원본 불변', desc: '모든 처리는 작업 사본에서 하고, 원본은 납품 폴더에 그대로 동봉한다. 수정본은 확인용 이름으로 캐릭터툴에 따로 넣어 원본을 덮어쓰지 않는다.' },
      { title: '개발 에이전트의 장기 기억 설계', desc: 'Claude Code로 개발하면서 세션이 바뀌어도 판단이 이어지도록 기억 구조를 직접 설계했다. 작업 규칙(CLAUDE.md), 규칙 색인, 후보 추적, 파츠별 분석 기록 50여 개, 인계 문서, 버전별 변경 기록을 역할별로 나눠 두고, 새 세션은 정해진 순서로 읽고 이어 간다.' },
      { title: '작업자 PC와 처리 분리', desc: '3ds Max·캐릭터툴 처리는 서버 VM에서 하고, 작업자 PC는 업로드와 결과 수신만 한다. 게이트웨이가 빈 VM을 골라 배정한다.' },
    ],
    troubleshooting: [
      {
        problem: '검수가 끝났는데 결과를 받지 못하는 경우가 간헐적으로 발생',
        solution: '진행 상태는 VM에 실시간으로 묻고, 결과 제공은 15초마다 갱신되는 작업 장부를 보고 있어 그 사이 요청이 거절됐다. 장부가 완료로 바뀌기 전까지 진행 응답도 "결과 정리 중"으로 맞춰 두 판단 기준을 일치시켰다.',
      },
      {
        problem: '검수 중 실행 버튼이 다시 눌려 "모든 VM 작업 중" 팝업이 반복',
        solution: '비활성 버튼이 활성 버튼과 같은 색이라 구분이 안 됐다. 실행 중에는 버튼과 재진입을 잠그고 비활성 상태를 회색으로 표시했으며, 게이트웨이에 업로드 거절·진행 확인 기록을 남겨 원인을 추적할 수 있게 했다.',
      },
      {
        problem: '한 파츠의 오탐 요청이 같은 아이템의 정상 수정까지 가림',
        solution: '같은 아이템에 요청이 하나라도 있으면 나머지가 업데이트 불가로 묶이는 구조라 오탐 하나의 영향이 컸다. 목걸이 파묻힘 판정을 정답과 대조해 높이·목 두름 각도·폭 조건으로 좁혀 오탐 12건을 없애고 정답 3건은 유지했다.',
      },
      {
        problem: '넘어짐 모션에서만 생기는 소팅은 서 있는 자세 검사로 잡히지 않음',
        solution: '넘어짐 모션 구간 프레임을 재생해 피부 정점이 옷 앞으로 나오는지 화면 픽셀로 검사하고, 옷층 웨이트 조정과 피부 정점 안쪽 이동으로 수정한 뒤 잔여 픽셀을 다시 확인한다.',
      },
      {
        problem: 'VLM 화면 판정의 오탐이 높아 실무 적용이 어려움 (수정 후 정상 73장 중 44장 결함 판정)',
        solution: '검사 항목별 프롬프트 분리와 단독·좌우 비교 2단계 검사로 오탐을 줄였고, 원인이 데이터에 있는 결함(알파 소팅·피직·정점)은 3ds Max·RGM 데이터 판정으로 옮겨 사진은 결과 확인과 증거 이미지에만 쓰게 했다.',
      },
      {
        problem: 'VM 디스크 사용률 100%로 처리가 느림',
        solution: 'VM 디스크가 HDD에 있던 것이 원인이라 SSD로 옮겼다.',
      },
    ],
    achievements: [
      '',      // 성과 수치 입력 (예: '검수 시간 OO% 단축'). 비워 둔 줄은 화면에 표시하지 않음
      '',      // 성과 수치 입력
      '압축 파일 하나로 검수 리포트와 납품 폴더까지 받는 구조로 그래픽팀 실사용 중',
      '담당자 실제 검수 결과 6세트를 정답으로 삼아 판정·자동 수정 범위를 단계적으로 확대',
      '작업자 PC에서 3ds Max·캐릭터툴 처리를 없애고 서버 VM으로 분산',
    ],
    next: [
      '국가별 검수 지원(태국·베트남): 공용 모델 규칙 + 국가 전용 파일 규칙, 클라이언트 국가 선택',
      '이전에 완료된 리소스가 다시 들어온 경우를 구분하는 리소스 중복 판정',
    ],
    skills: ['Python', 'C# (.NET 8, WinForms)', '3ds Max 2020 / MaxScript', 'Claude (CLI)', 'Qwen3-VL-32B', 'RGM 바이너리 파서', 'Hyper-V (GPU-P)', 'openpyxl', 'Claude Code'],
  },
  {
    id: 'vlm-mcp',
    accent: 'indigo',
    category: '생성형 AI',
    name: 'VLM Image MCP Server',
    subtitle: 'Claude Code 용 이미지 분석·생성·편집 MCP 서버',
    period: '',
    tag: 'Work',
    collab: true,
    status: '운영 중',
    role: '공동 개발',
    overview:
      '사내 GPU 서버의 VLM과 이미지 생성·편집 모델을 MCP(Model Context Protocol) 도구로 감싸 Claude Code 에서 바로 부를 수 있게 만든 서버. 기획·사업팀과 개발자가 Unity UI 목업과 화면 초안을 대화만으로 만들고 고친다.',
    background:
      'Claude Code 는 코드와 문서 작업에는 강하지만 이미지를 만들거나 고치는 일은 직접 할 수 없었다. 현업은 UI 시안 하나를 바꾸려 해도 디자이너에게 요청하거나 별도 생성 툴을 오가야 했다. 사내 서버에 이미 있던 VLM과 이미지 편집 모델을 에이전트가 쓸 수 있는 도구로 노출하면, 대화 흐름 안에서 이미지 작업까지 이어 갈 수 있다고 판단했다.',
    metrics: [
      { value: '3+', label: '사용 팀' },
      { value: '2', label: 'MCP 로 감싼 모델' },
    ],
    architecture: [
      { title: 'Claude Code (클라이언트)', desc: '사용자가 자연어로 요청하면 에이전트가 MCP 도구(분석·생성·편집)를 골라 호출' },
      { title: 'MCP 서버', desc: '도구 정의와 입력 검증, 이미지 파일 경로·결과 전달' },
      { title: 'VLM (Qwen3-VL-32B, llama.cpp GGUF)', desc: '원본 이미지를 서버에서 직접 보고 상황을 분석해 편집 모델용 프롬프트로 다시 씀' },
      { title: '이미지 편집 모델 (Qwen-Image-Edit, PyTorch BF16)', desc: '다시 쓴 프롬프트로 생성·편집, 결과를 다음 단계 입력으로 연결' },
    ],
    coreFeatures: [
      '이미지 분석·생성·편집 기능을 MCP 도구로 노출해 Claude Code 대화 안에서 호출',
      '서버 쪽 VLM이 원본 이미지를 직접 분석하고 편집 모델에 맞는 프롬프트로 재작성',
      '이미지를 클라이언트와 주고받지 않고 서버 안에서 분석 → 편집 → 재편집을 연쇄 실행',
      'Docker Compose 로 VLM·편집 모델·MCP 서버를 묶어 배포',
    ],
    decisions: [
      { title: '프롬프트 재작성을 서버 VLM에 맡김', desc: '사용자 요청 문장을 그대로 편집 모델에 넣으면 원본 맥락이 빠진다. 원본을 실제로 본 VLM이 편집 지시를 다시 쓰게 해 결과 일관성을 높였다.' },
      { title: '이미지 왕복 제거', desc: '에이전트와 서버 사이에 이미지를 계속 주고받으면 느리고 컨텍스트를 많이 쓴다. 이미지는 서버에 두고 경로와 결과 요약만 오가게 했다.' },
    ],
    troubleshooting: [
      {
        problem: '에이전트가 이미지 생성·편집을 직접 하지 못해 작업 흐름이 끊김',
        solution: '생성·편집 모델을 MCP 도구로 감싸 Claude Code 가 필요할 때 호출하도록 연결했다.',
      },
      {
        problem: '짧은 사용자 요청만으로는 편집 결과가 원본과 동떨어짐',
        solution: '서버 VLM이 원본을 분석해 구도·대상·변경점을 담은 프롬프트로 재작성한 뒤 편집 모델에 전달했다.',
      },
    ],
    achievements: [
      '',      // 성과 수치 입력
      '기획·사업팀과 개발자 등 3개 이상 팀이 UI 목업·화면 초안 작업에 사용',
    ],
    skills: ['MCP', 'Claude Code', 'Qwen3-VL-32B', 'Qwen-Image-Edit', 'llama.cpp (GGUF)', 'PyTorch', 'Docker Compose', 'Python'],
  },
  {
    id: 'asset-search',
    accent: 'sky',
    category: '생성형 AI',
    name: 'Asset Similarity Search',
    subtitle: '의류·헤어 형태 기반 캐릭터 에셋 유사도 검색',
    period: '',
    tag: 'Work',
    collab: true,
    status: '운영 중',
    role: '공동 개발',
    overview:
      '디자이너가 이미지 한 장으로 사내 캐릭터 의류·헤어 에셋 5만 장 중 형태가 비슷한 것을 찾는 검색 시스템. 세그멘테이션과 깊이 지도로 색이 아닌 실루엣·입체감을 뽑아 임베딩하고 Faiss 로 검색한다.',
    background:
      '디자이너가 신규 의상·헤어를 만들 때 비슷한 기존 에셋이 있는지 확인하려면 폴더를 직접 뒤져야 했다. 일반 이미지 임베딩은 색과 배경에 끌려 형태가 비슷한 에셋을 잘 찾지 못했다. 그래서 의류·헤어 영역만 잘라 깊이 지도로 바꾼 뒤 임베딩해 형태 위주로 검색되게 했다.',
    metrics: [
      { value: '50K', label: '색인한 이미지' },
      { value: '2', label: '병렬 파이프라인 (의류·헤어)' },
      { value: '512', label: '임베딩 차원' },
    ],
    architecture: [
      { title: '의류 파이프라인', desc: 'SegFormer-b2(ATR)로 상의·하의·원피스 영역 분리 → Distill-Any-Depth 깊이 지도' },
      { title: '헤어 파이프라인', desc: 'SAM3 텍스트 프롬프트(hair·face·hat 등)로 헤어 분리, 상단 영역 크롭 → Marigold 깊이 지도' },
      { title: '임베딩·색인', desc: 'CLIP ViT-B/32 512차원 임베딩 → Faiss IndexFlatIP(코사인 유사도) 색인, 경로 매핑 테이블' },
      { title: '검색 UI', desc: 'Gradio 검색 화면, 파일 이름 접두어 기반 성별 필터' },
    ],
    coreFeatures: [
      '의류·헤어별 세그멘테이션 + 깊이 지도로 형태 중심 특징 추출',
      'CLIP 임베딩 + Faiss 벡터 검색으로 5만 장 규모 즉시 검색',
      'DB 구축·검색·경로 매핑·Gradio UI 를 스크립트 단위로 분리해 재색인·운영 단순화',
      '성별 필터 등 디자이너 작업 흐름에 맞춘 검색 조건',
    ],
    decisions: [
      { title: '색 대신 형태로 임베딩', desc: '원본 이미지 임베딩은 색·배경 영향이 커서, 영역 분리 후 깊이 지도로 바꿔 실루엣과 입체감이 검색 기준이 되게 했다.' },
      { title: '의류와 헤어 파이프라인 분리', desc: '헤어는 의류 세그멘테이션 모델로 잘 안 잡혀 텍스트 프롬프트 기반 SAM3와 별도 깊이 모델을 썼다.' },
      { title: '정확 검색 색인(IndexFlatIP)', desc: '5만 장 규모에서는 근사 색인 없이도 충분히 빨라, 재현율 손실이 없는 정확 내적 검색을 택했다.' },
    ],
    troubleshooting: [
      {
        problem: '일반 이미지 임베딩이 색과 배경이 비슷한 에셋만 찾아옴',
        solution: '세그멘테이션으로 대상 영역만 남기고 깊이 지도로 변환해 형태 정보만 임베딩했다.',
      },
      {
        problem: '헤어 영역이 의류 세그멘테이션 모델에서 제대로 분리되지 않음',
        solution: 'SAM3 텍스트 프롬프트로 헤어·얼굴·모자를 구분하고 상단 영역을 잘라 별도 파이프라인으로 처리했다.',
      },
    ],
    achievements: [
      '',      // 성과 수치 입력
      '디자이너가 사내 캐릭터 에셋 5만 장을 형태 기준으로 검색하는 도구로 사용',
    ],
    skills: ['CLIP', 'Faiss', 'SegFormer', 'SAM3', 'Distill-Any-Depth', 'Marigold', 'Gradio', 'Python'],
  },
  {
    id: 'max-autofix',
    category: '3D·그래픽',
    accent: 'emerald',
    name: 'Max AutoFix Engine',
    subtitle: '3ds Max 아바타 리소스 자동 수정 엔진',
    period: '',      // 기간 입력. 비워 두면 화면에 표시하지 않음
    tag: 'Work',
    role: '단독 설계·개발',
    form: 'MaxScript 엔진 + 3ds Max C++ SDK 플러그인 + 헤드리스 배치',
    overview:
      '아바타 의상 .max 파일을 열어 알파 소팅(반투명 재질 그리기 순서) 결함을 모델 형태에 맞춰 자동 교정하고, 머티리얼 정리와 RGM 추출까지 끝내는 3ds Max 자동 수정 엔진. MaxScript로는 접근할 수 없는 Physique 웨이트는 C++ SDK 플러그인으로 직접 다루고, 노멀 이상·불필요 오브젝트 정리·RGM 일괄 추출 도구까지 하나의 배치 흐름으로 묶었다.',
    background:
      '반투명 재질의 그리기 순서가 꼬이면 게임에서 치마 안쪽 다리가 비치거나 배경색이 뚫려 보인다. 그래픽 담당자는 결함이 나올 때마다 3ds Max에서 면을 골라 재질 ID를 손으로 다시 매기고 RGM을 다시 뽑아야 했다. 의상마다 겹침 구조가 달라 단순 규칙 하나로는 고쳐지지 않았고, 웨이트(Physique) 문제는 MaxScript로 접근조차 할 수 없었다.',
    metrics: [
      { value: '149/149', label: '회귀 대조 오브젝트 재질 ID 일치' },
      { value: '270→13', label: '결함 면 (정상본 대비, fa_c8987)' },
      { value: '0.74%', label: '웨이트 곡선 교차검증 평균 오차' },
      { value: '10K+', label: 'MaxScript 엔진 규모 (줄)' },
    ],
    architecture: [
      { title: '헤드리스 실행', desc: 'C# 프로그램이 경로·옵션을 담은 러너 .ms 를 만들어 3dsmaxbatch 로 실행. 리소스마다 별도 프로세스, progress 파일로 크래시 후 이어 처리' },
      { title: '형태 실측·자동 분기', desc: 'placeholder 패턴, 깊이 자기겹침, 방위각 파편화 비율을 측정해 모델 유형별 교정 경로로 자동 라우팅' },
      { title: '교정', desc: '엘리먼트 단위 슬롯 분리, 각도순 정렬, 좌우 짝 인터리브, 필요하면 면 재생성 + UV 복원으로 재질 ID 재배치' },
      { title: '정리·출력', desc: '비트맵 채널 정규화, 같은 맵 서브머티리얼 통합 → 3ds Max 2020 포맷 저장, RGM 추출, 결과 CSV' },
    ],
    coreFeatures: [
      '알파 소팅 자동 교정: 모델 형태를 실측해 교정 방식을 고르고 재질 ID를 다시 매김, 단일 파일·폴더 재귀 배치·헤드리스 모드 지원',
      'Physique 웨이트 C++ SDK 플러그인: MaxScript에 정점 웨이트 읽기·혼합 웨이트 지정 함수를 노출, 무릎→발목 축 투영값 기반 웨이트 곡선 피팅',
      '노멀 이상 수정: 노드 변환 행렬이 단위 행렬이 아니라 조명이 검게 보이는 파일을 메쉬 손상 없이 변환만 초기화, FIXED/OK/ERROR 상태 기록',
      'Clean & Fix: 바이패드 미연결 오브젝트·불필요 본 메쉬·다른 파츠 메쉬 삭제와 이름 규칙 교정을 4단계로 자동 처리',
      'RGM 일괄 추출과 정점 이상(고립 정점·열린 엣지) 탐지 리포트',
    ],
    decisions: [
      { title: '범용 규칙 대신 분기 + 트리아지', desc: '형상 계열 결함 7건을 비교해 공통 계산 규칙이 없다는 결론을 냈다. 대신 면·정점 수가 같으면 재질 ID 문제, 다르면 형상 문제로 먼저 가르고, 모델 특성 실측값으로 교정 경로를 나눴다.' },
      { title: '정상본 없이 되는 계산식', desc: '피직 웨이트는 정상본을 복사하는 방식에서 시작했지만, 정상본이 없는 신규 리소스에도 쓰이도록 무릎→발목 축 투영값으로 웨이트 곡선을 피팅했다. 단순 3D 거리식(오차 31%) 대비 0.74%.' },
      { title: '위험한 자동화는 하지 않음', desc: '고립 정점 자동 웰딩은 의도된 이음새를 망가뜨릴 수 있어 탐지와 리포트만 하게 했다.' },
      { title: '한계를 문서로 공유', desc: '이 도구는 원본으로 되돌리는 것이 아니라 자체 기준으로 ID를 재배치한다. 그래픽팀에 리소스별 실패 원인, 자동 처리 가능·불가 조건, 눈으로 확인해야 하는 이유를 정리해 회신했다.' },
    ],
    troubleshooting: [
      {
        problem: 'Physique 가 붙은 메쉬에서 setFaceMatID 가 "modifier 가 있어 수정 불가"로 거부됨',
        solution: '모디파이어를 건드리지 않고 baseObject 의 메쉬를 통째로 교체하는 방식으로 재질 ID를 바꿨다.',
      },
      {
        problem: '특정 오브젝트에서 setVert 가 정점을 엉뚱하게 옮기는 버그 (여러 방법 시도 실패)',
        solution: '대상 면을 지우고 createVert·createPolygon 으로 다시 만든 뒤 UV를 복원했다. fs_n26202 는 184면 삭제 → 142면 재생성 후 정점 수가 정상본과 일치(852→850).',
      },
      {
        problem: 'MaxScript 로는 Physique 모디파이어에 접근할 수 없음',
        solution: '3ds Max SDK 의 IPhysiqueImport/Export 를 MaxScript 함수로 노출하는 C++ 플러그인을 만들고, 쓰기 전에 기존 웨이트가 초기화되는지 먼저 진단하는 단계부터 검증했다.',
      },
      {
        problem: '3dsmaxbatch 한 프로세스에 여러 리소스를 넣으면 정상 파일도 크래시로 보임',
        solution: '리소스마다 프로세스를 분리하고, 종료 코드 대신 로그·CSV·산출물 존재로 성공을 판정했다.',
      },
      {
        problem: '수정 건수가 일부 경로에서 집계되지 않아, 실제로 고친 파일이 "변경 없음"으로 원본 복원될 위험',
        solution: '집계 누락 4곳을 고쳐 검수툴의 원본 복원 단계와 결과가 어긋나지 않게 했다.',
      },
    ],
    achievements: [
      '',      // 성과 수치 입력 (예: 작업 시간 단축)
      '14개 모델·76개 파일 회귀 대조에서 149개 오브젝트 재질 ID 완전 일치',
      '정상본 대비 결함 면 감소: fa_c8987 270→13, fp_c9510 561→0, ms_c9510 96→0',
      'Clean & Fix 파일당 약 0.4초(1,000개 약 7분), 그래픽팀에 단독 실행 배치본 전달',
    ],
    next: [
      '피직 웨이트 곡선은 표본 1건으로 검증한 상태라 다른 신발·하의로 확대 검증 필요',
    ],
    skills: ['MaxScript', 'C++ (3ds Max SDK)', 'Physique API', '3dsmaxbatch', 'Python', 'C#'],
  },
  {
    id: 'aucontrol',
    category: 'QA 자동화',
    accent: 'emerald',
    name: 'AUControl',
    subtitle: '오디션 게임 신규 아이템 QA 자동화 툴',
    period: '2025.06 - 2026.02',
    tag: 'Work',
    overview:
      '오디션 게임의 신규 아이템 QA 테스트 전 과정을 자동화한 Windows 내부 도구. xlsx QA 리스트를 읽어 패션몰·커플샵에서 NEW 마크 표시 확인, 아이템 구매·착용, 재화 차감, 리소스 무결성 검사를 게임 창에서 직접 자동 실행. C# 클라이언트 + Python OCR 서버 분리 아키텍처로 단독 설계·구현.',
    background:
      'QA 담당자가 신규 아이템 업데이트마다 게임에 직접 접속해 패션몰·커플샵 등 각 화면에서 항목별 테스트를 수동으로 반복 수행하고 있었다. 처리 항목이 많아질수록 누락 위험과 담당자 피로도가 높아지는 구조적 문제가 있었다. 게임 보안(안티치트)이 표준 Win32 캡처·입력 API를 차단해 자동화 구현 자체가 까다로웠다.',
    coreFeatures: [
      'xlsx QA 리스트 파싱 → 패션몰·커플샵 NEW 마크 확인·구매·착용·재화 차감·리소스 무결성 테스트 항목별 자동 실행',
      'PaddleOCR 기반 게임 UI 텍스트 인식 + 템플릿 매칭(OpenCV)으로 NEW 마크·버튼·다이얼로그 동적 탐지',
      'DXGI Desktop Duplication API(DirectX 11) 기반 화면 캡처로 안티치트(Xigncode 등) 우회',
      'SendInput·PostMessage·Interception Driver 3중 입력 방식 자동 전환으로 안티치트 입력 차단 해소',
      'Python HTTP 서버 기반 PaddleOCR REST API 서버 — 서버 시작 시 1회 모델 로드·메모리 상주, GPU/CPU 자동 감지',
      '한글 입력 자동 변환 처리 (두벌식 자모 분해 → 영문 키 시퀀스 매핑)',
    ],
    troubleshooting: [
      {
        problem: '안티치트가 BitBlt·PrintWindow 등 표준 캡처 API를 후킹해 검은 화면만 반환, 게임 화면 읽기 불가',
        solution: 'DXGI Desktop Duplication API(DirectX 11)로 전환해 드라이버 레벨 캡처, 안티치트 우회 성공',
      },
      {
        problem: '안티치트가 SendInput 후킹으로 키·마우스 입력을 차단, 자동화 동작 불가',
        solution: 'Interception Driver를 최종 수단으로 추가해 SendInput → PostMessage → Interception 3단계 자동 전환 구조 구현',
      },
      {
        problem: 'Tesseract를 로컬 라이브러리로 직접 호출하면 매 추론마다 모델 초기화 지연 발생, 한글 인식률 낮음',
        solution: 'Python 서버 분리 아키텍처로 전환 — 서버 기동 시 1회만 모델 로드·GPU 상주, PaddleOCR 한글 특화 모델로 교체',
      },
    ],
    tasks: [
      'xlsx QA 리스트 파싱 및 테스트 항목 자동 실행 엔진 구현 (패션몰 NEW 확인, 커플샵 NEW 확인, 구매·착용, 재화 차감, 리소스 무결성 등)',
      'Python HTTP 서버 기반 PaddleOCR REST API 서버 직접 설계·구현 — GPU/CPU 자동 감지, 7개 엔드포인트, 4단계 텍스트 매칭 알고리즘',
      'Tesseract·EasyOCR·Surya·PaddleOCR 4종 OCR 엔진 직접 비교 평가 후 PaddleOCR 최종 선정',
      'DXGI Desktop Duplication API(DirectX 11) 기반 화면 캡처로 게임 보안(안티치트) 우회',
      'Qwen3 VL 32B 통합으로 하드코딩 좌표 → 동적 UI 인식 구조 전환',
      'SendInput·PostMessage·Interception Driver 3중 입력 방식 자동 전환 구현',
      '한글 입력 자동 변환 처리 (두벌식 자모 분해 → 영문 키 시퀀스 매핑)',
    ],
    achievements: [
      'QA 담당자 수동 반복 테스트 전 과정 자동화 — 안티치트 환경 포함',
      '안티치트 환경에서 게임 화면 캡처·입력 자동화 성공',
      'OCR 아키텍처를 Tesseract 로컬 방식에서 Python 서버 분리로 전환 — 추론 지연 제거 및 한글 인식률 향상',
    ],
    skills: ['C# (.NET 8.0)', 'Python', 'PaddleOCR PP-OCRv5', 'DirectX 11 / DXGI', 'SharpDX', 'Qwen3 VL 32B', 'OpenCV', 'Interception Driver', 'REST API'],
  },
  {
    id: 'image-service',
    accent: 'cyan',
    category: '생성형 AI',
    name: 'Image Processing Service',
    subtitle: '초해상도·배경 제거 통합 이미지 처리 서비스',
    period: '',
    tag: 'Work',
    collab: true,
    status: '운영 중',
    role: '공동 개발',
    overview:
      '오픈소스 초해상도(InvSamplerSR)와 배경 제거(U²-Net) 모델을 하나의 Gradio 서비스로 묶어 그래픽 파트가 업스케일·배경 제거·일괄 처리를 웹에서 바로 쓰게 만든 도구. 투명 배경(RGBA) 이미지도 그대로 처리하도록 모델 입출력을 확장했다.',
    background:
      '그래픽 파트는 게임 리소스 이미지를 키우거나 배경을 지울 때 서로 다른 툴을 오가며 한 장씩 처리했다. 게임 리소스는 투명 배경 PNG가 많은데, 공개 초해상도 모델은 투명 배경을 학습하지 않아 알파 채널이 깨졌다.',
    metrics: [
      { value: '4', label: '처리 탭 (SR·배경 제거·통합·일괄)' },
      { value: '3', label: '업스케일 배율 (2x·4x·8x)' },
      { value: '2', label: '통합한 오픈소스 모델' },
    ],
    coreFeatures: [
      '초해상도 2x·4x·8x, 배경 제거, 두 기능 연속 처리, ZIP 일괄 처리',
      '초해상도 경로를 RGBA 입출력으로 확장해 투명 배경 리소스 처리',
      '완전 투명이 아닌 픽셀에만 조건부 가우시안 블러를 적용해 경계 품질 보정',
      'Docker 기반 배포',
    ],
    troubleshooting: [
      {
        problem: '공개 초해상도 모델이 투명 배경을 학습하지 않아 알파 채널이 깨짐',
        solution: '색상과 알파 채널을 나눠 처리하는 RGBA 경로를 추가하고, 반투명 경계에만 조건부 블러를 적용했다.',
      },
      {
        problem: '여러 장을 처리할 때 한 장씩 올리고 받아야 함',
        solution: 'ZIP 업로드·다운로드 일괄 처리 탭을 만들었다.',
      },
    ],
    achievements: [
      '',      // 성과 수치 입력
      '그래픽 파트 실무 도구로 채택',
    ],
    skills: ['InvSamplerSR', 'U²-Net', 'OpenCV', 'NumPy', 'Gradio', 'Docker', 'Python'],
  },
  {
    id: 'midi',
    category: '음성·사운드',
    accent: 'indigo',
    name: 'AI Midi Generator',
    subtitle: '사운드팀 채보 자동 생성 시스템',
    period: '2024.09 - 2025.03',
    tag: 'Work',
    overview:
      '오디오 파일에서 Conformer 딥러닝 모델로 리듬게임 채보를 자동 생성하는 웹 기반 AI 시스템. Gradio 기반 웹 UI로 비개발자도 사용 가능하도록 내부 서비스로 배포.',
    background:
      '사운드팀이 신규 음원마다 게임 모드별 채보를 수작업으로 제작해야 했고, 모드별로 채보 포맷이 다르고 작업량이 많아 병목이 발생하고 있었다. 딥러닝 기반 자동화로 작업 부담을 줄이고 일관된 품질을 확보할 필요가 있었다.',
    role: '단독 설계·학습·서빙',
    form: 'Python · PyTorch · Gradio 웹 서비스 (사내 GPU 서버)',
    metrics: [
      { value: '4', label: '게임 모드 (비트업·리듬홀릭·원투파티·별찌)' },
      { value: '7', label: '모드·레벨별 학습 모델' },
      { value: '1/16', label: '박자 단위 노트 예측' },
      { value: '128', label: '멜 밴드 입력 (50–17,000Hz)' },
    ],
    architecture: [
      { title: '입력', desc: 'OGG/WAV 업로드, 파일 이름의 BPM 표기에서 템포를 읽어 16분음표 길이 계산' },
      { title: '전처리', desc: '비트업·별찌는 MelBandRoformer 로 보컬 분리 후 처리, 리샘플링 → Mel-Spectrogram(모드별 128/40 밴드)' },
      { title: '추론', desc: '모드·레벨별 Conformer 체크포인트로 마디·박 단위 노트 예측(배치 추론)' },
      { title: '후처리·변환', desc: '모드별 규칙(쉼마디·호흡·롱노트 길이 제한·마무리 패턴) 적용 → MIDI → 게임 데이터 포맷(SLK/XLS/TXT)' },
    ],
    decisions: [
      { title: '음성 인식 구조(Conformer)를 채보에 적용', desc: '채보는 시간축 오디오를 박 단위 기호열로 바꾸는 문제라 음성 인식과 구조가 같다고 보고, 어텐션과 합성곱을 함께 쓰는 Conformer를 레이어·드롭아웃을 줄여 자체 데이터로 학습했다.' },
      { title: '모델이 못 하는 건 규칙으로', desc: '쉼마디·호흡 구간, 롱노트 최대 길이, 마무리 패턴처럼 기획자가 정한 규칙은 모델에 학습시키지 않고 후처리 규칙으로 보장했다.' },
      { title: '사운드팀이 바로 쓰는 형식으로 출력', desc: '결과를 MIDI로 끝내지 않고 게임에 바로 넣는 모드별 데이터 포맷(SLK/XLS/TXT)까지 자동 변환했다.' },
    ],
    coreFeatures: [
      'Conformer 오픈소스 아키텍처 기반 커스텀 학습 (레이어 수·드롭아웃 수정, 자체 데이터 학습)',
      '오디오 전처리 파이프라인: 리샘플링 → Mel-Spectrogram 변환(128 밴드) → 배치 추론',
      'MelBandRoformer 보컬 분리 모델 통합으로 보컬/MR 자동 분리 후 각각 처리',
      '4개 게임 모드별 특화 모델 총 7개 학습 및 MIDI/TXT/SLK/XLS 다중 포맷 변환 자동화',
      'Docker 컨테이너 기반 GPU 모델 서빙 환경 구성 (NVIDIA Container Toolkit, GPU 패스스루)',
      'Gradio 기반 웹 GUI — 비개발자도 파일 업로드 후 원클릭으로 채보 생성 가능',
    ],
    troubleshooting: [
      {
        problem: '단일 파일 순차 처리 방식으로 긴 음원에서 처리 시간이 지나치게 길었음',
        solution: '배치 추론 방식으로 전환하여 작업 시간 90% 단축',
      },
      {
        problem: '학습 데이터 내 보컬/악기 혼재로 모델이 보컬 구간을 노트로 오인식하는 패턴 반복',
        solution: 'MelBandRoformer로 보컬을 사전 분리한 뒤 학습 데이터 재구성, 일관성 없는 레이블 수정으로 정확도 80% 향상',
      },
    ],
    tasks: [
      'Conformer 오픈소스 아키텍처 기반 커스텀 학습 (레이어 수·드롭아웃 수정, 자체 데이터 학습)',
      '오디오 전처리 파이프라인 구현: 리샘플링 → Mel-Spectrogram 변환(128 밴드) → 배치 추론',
      'MelBandRoformer 보컬 분리 모델 통합으로 보컬/MR 자동 분리 파이프라인 구축',
      '4개 게임 모드별 특화 모델 총 7개 학습 및 MIDI/TXT/SLK/XLS 다중 포맷 변환 자동화',
      'Docker 컨테이너 기반 GPU 모델 서빙 환경 구성 (NVIDIA Container Toolkit, GPU 패스스루)',
      '일관성 없는 학습 데이터 수정 및 보컬 분리 적용으로 모델 정확도 개선',
    ],
    achievements: [
      'Gradio 기반 GUI 제작으로 기존 수작업 대비 작업 시간 70% 단축',
      '데이터 품질 개선으로 모델 정확도 80% 향상',
      '단일 처리 방식 개선(배치 처리)으로 작업 시간 90% 단축',
    ],
    skills: ['Python', 'PyTorch (CUDA 12.1)', 'Conformer', 'Librosa', 'Gradio', 'Docker', 'NVIDIA Container Toolkit'],
  },
  {
    id: 'tts',
    category: '음성·사운드',
    accent: 'sky',
    name: 'TTS / STT / RVC',
    subtitle: '오픈소스 음성 AI 모델 서빙',
    period: '2025.03 - 2025.06',
    tag: 'Work',
    overview:
      'Hugging Face Hub/Spaces/Papers를 활용해 최신 음성 AI 모델을 리서치하고 로컬 GPU 서버(A100)에 직접 서빙. 기획팀 성우 녹음 비용 절감 및 게임 캐릭터 대사 처리에 기여.',
    background:
      '게임 개발 중 캐릭터 대사 녹음 비용과 일정이 지속적으로 프로젝트 진행을 제약하고 있었다. 오픈소스 TTS/RVC 모델을 사내 GPU 서버에 서빙하면 외부 성우 섭외 없이 대사를 빠르게 생성할 수 있다는 판단 하에 도입을 추진했다.',
    coreFeatures: [
      'paperswithcode, Hugging Face Papers, GitHub 기반 최신 AI 기술 지속 R&D',
      '오픈소스 TTS(SparkTTS, OpenAudio S1), Whisper STT 로컬 구현 및 REST API 서빙',
      'RVC(Retrieval-based Voice Conversion) 학습·추론 GUI — 섭외 성우 보이스를 게임 캐릭터 대사에 적용',
      'A100 서버에서 Linux, Docker, Python 기반 GPU 추론 환경 구성·운영',
      'HF Spaces 데모 사전 검증 → Hub 모델 다운로드 → 로컬 서빙까지 일관된 도입 프로세스 수립',
    ],
    troubleshooting: [
      {
        problem: '모델마다 의존성·CUDA 버전이 달라 동일 서버에서 충돌 발생',
        solution: '모델별 Docker 컨테이너 분리 구성으로 격리, GPU 패스스루로 각 컨테이너에서 독립 추론',
      },
      {
        problem: 'RVC 학습·추론을 CLI로만 사용 가능해 비개발자 팀원이 활용하기 어려웠음',
        solution: 'Gradio 기반 GUI 래퍼 직접 구현 — 파일 업로드·학습·추론을 웹 인터페이스로 제공',
      },
    ],
    tasks: [
      'paperswithcode, Hugging Face Papers, GitHub 기반 최신 AI 기술 R&D',
      '오픈소스 TTS(SparkTTS, OpenAudio S1), Whisper STT 로컬 구현 및 REST API 형태 서빙',
      'RVC(Retrieval-based Voice Conversion) 학습·추론 GUI 구현 — 섭외 성우 보이스를 게임 캐릭터 대사에 적용',
      'A100 서버에서 Linux, Docker, Python 기반 GPU 추론 환경 구성·운영',
      'Hugging Face Spaces 데모 사전 검증 → Hub 모델 다운로드 → 로컬 서빙까지 일관된 도입 프로세스 수립',
    ],
    achievements: [
      '오픈소스 TTS/Whisper 구현으로 성우 섭외 비용 50% 절감',
      'RVC GUI 구현으로 게임 캐릭터 대사 처리 비용 30% 절감',
    ],
    skills: ['Python', 'PyTorch', 'Hugging Face Transformers', 'SparkTTS', 'OpenAudio S1', 'Whisper', 'RVC', 'Docker', 'Linux (A100)'],
  },
  {
    id: 'texture-gen',
    accent: 'emerald',
    category: '생성형 AI',
    name: 'Texture Generation Pipeline',
    subtitle: '사내 의류 리소스 기반 텍스처 생성 파이프라인',
    period: '',
    tag: 'Work',
    collab: true,
    role: '공동 개발 (디자인팀 협업)',
    overview:
      '2010~2023년 사내 의류 리소스 약 5만 장을 스타일 단위로 나눠 스타일마다 DreamBooth 체크포인트를 학습하고, 디자이너가 게임 의상 스타일링용 텍스처를 생성·시험할 수 있게 만든 파이프라인.',
    background:
      '의상 텍스처 시안을 만들 때마다 디자이너가 처음부터 그려야 했다. 회사에는 13년 동안 쌓인 의류 텍스처가 있었지만 재사용할 방법이 없었다. 이 자산을 스타일별로 학습시키면 우리 게임 화풍에 맞는 시안을 빠르게 뽑을 수 있다고 보고 디자인팀과 함께 진행했다.',
    metrics: [
      { value: '50K', label: '학습 레퍼런스 이미지' },
      { value: '13Y', label: '리소스 수집 기간' },
      { value: '48h', label: '모델당 학습 시간' },
    ],
    architecture: [
      { title: '텍스처 풀', desc: '연도·스타일별 사내 의류 텍스처 정리, 512x512 정규화' },
      { title: '태깅', desc: 'Tkinter 태깅 도구로 디자이너가 직접 스타일 태그·프롬프트 작성' },
      { title: '학습', desc: 'Stable Diffusion v1.5 기반 스타일별 DreamBooth 학습(단일 24GB GPU)' },
      { title: '체크포인트 관리·시험', desc: '스타일별 체크포인트 등록, Gradio 화면에서 생성 시험' },
    ],
    coreFeatures: [
      '사내 의류 리소스를 스타일 단위로 분할해 스타일별 체크포인트 학습',
      '비개발자인 디자이너가 직접 태그를 달고 결과를 시험하는 Tkinter 태깅 도구',
      'Gradio 기반 생성 시험 화면과 체크포인트 레지스트리',
      'Docker 기반 학습·추론 환경',
    ],
    decisions: [
      { title: 'LoRA 대신 DreamBooth', desc: '게임 화풍을 강하게 재현하는 것이 목표라, 가벼운 LoRA보다 스타일 고정력이 큰 DreamBooth를 택했다.' },
      { title: '의도적인 과적합', desc: '일반 이미지가 아니라 3D 에셋 텍스처라서 다양성보다 사내 스타일 재현이 중요했다. 스타일별로 좁게 학습했다.' },
    ],
    troubleshooting: [
      {
        problem: '디자이너가 학습 데이터 태깅과 결과 확인을 개발자에게 매번 요청해야 함',
        solution: '태깅과 생성 시험을 GUI 도구로 만들어 디자이너가 직접 데이터를 고치고 결과를 확인하게 했다.',
      },
      {
        problem: '여러 해에 걸친 리소스의 해상도·형식이 제각각',
        solution: '512x512 정규화와 스타일 단위 분할로 학습 입력을 통일했다.',
      },
    ],
    achievements: [
      '',      // 성과 수치 입력
    ],
    skills: ['Stable Diffusion v1.5', 'DreamBooth', 'PyTorch', 'xFormers', 'Gradio', 'Tkinter', 'Docker', 'Python'],
  },
]
