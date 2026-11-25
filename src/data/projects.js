export const projects = [
  {
    id: 'augraphics',
    accent: 'cyan',
    name: 'AUGraphics',
    subtitle: 'AI 3D 아바타 그래픽 검수 시스템',
    period: '',      // 시작 시기 입력 (예: '2026.01 - 현재'). 비워 두면 화면에 표시하지 않음
    tag: 'Work',
    status: '운영 중',
    role: '단독 설계·개발·운영',
    form: 'C# 클라이언트 + Python 서버 + Hyper-V GPU VM',
    overview:
      '외주 제작사가 보낸 아바타 아이템 압축 파일을 올리면 3ds Max 데이터 분석, 결함 판정, 자동 수정, 원본 양식 검수 리포트, 납품 폴더 구성까지 한 번에 처리하는 사내 검수 시스템. 그래픽팀 작업자 여러 명이 클라이언트에서 동시에 요청하고, 실제 처리는 서버의 GPU VM이 맡는다.',
    background:
      '1차 버전은 게임 클라이언트 화면을 각도별로 캡처해 VLM으로 결함을 찾는 방식이었다. 그런데 실제 검수에서 나오는 결함 대부분은 재질 ID 그리는 순서(알파 소팅), 피직 웨이트, 절단면 정점, 법선처럼 데이터 안에 원인이 있어서 사진만으로는 위치와 원인을 특정하기 어려웠고 오탐도 많았다. 그래서 3ds Max와 게임 RGM 파일을 직접 읽어 판정하고, 담당자가 실제로 처리한 검수 결과를 정답 삼아 규칙을 하나씩 쌓는 구조로 다시 설계했다.',
    metrics: [
      { value: '11', label: '단계 검수 파이프라인' },
      { value: '130+', label: '규칙 개정 이력' },
      { value: '400+', label: '회귀 대조 RGM 파츠' },
      { value: '6', label: '정답 비교 세트' },
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
    ],
    decisions: [
      { title: '화면 판정에서 데이터 판정으로', desc: '결함 원인이 대부분 데이터(재질 순서, 웨이트, 정점)에 있어서 캡처 대신 Max·RGM 데이터를 직접 읽는 쪽으로 바꿨다. 사진은 결과 확인과 증거 이미지에만 쓴다.' },
      { title: '정답 기반 규칙 수립', desc: '담당자의 실제 검수 결과(엑셀 코멘트와 수정본)를 원본과 비교해 규칙을 만든다. 사례가 1건뿐인 유형은 일반 규칙으로 넓히지 않고 해당 파츠 등록 또는 요청 코멘트만 남긴다.' },
      { title: '규칙을 바꿀 때마다 전체 회귀 대조', desc: '한 세트에 맞춘 규칙이 다른 세트에서 오탐을 만들지 않도록, 변경마다 기존 세트 전체를 다시 돌려 결과 차이를 확인한다.' },
      { title: '원본 불변', desc: '모든 처리는 작업 사본에서 하고, 원본은 납품 폴더에 그대로 동봉한다. 수정본은 확인용 이름으로 캐릭터툴에 따로 넣어 원본을 덮어쓰지 않는다.' },
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
    skills: ['C# (.NET 8, WinForms)', 'Python', '3ds Max 2020 / MaxScript', 'RGM 바이너리 해석', 'Hyper-V (GPU-P)', 'openpyxl', 'Claude Code'],
  },
  {
    id: 'aucontrol',
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
    id: 'tts',
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
    id: 'midi',
    accent: 'indigo',
    name: 'AI Midi Generator',
    subtitle: '사운드팀 채보 자동 생성 시스템',
    period: '2024.09 - 2025.03',
    tag: 'Work',
    overview:
      '오디오 파일에서 Conformer 딥러닝 모델로 리듬게임 채보를 자동 생성하는 웹 기반 AI 시스템. Gradio 기반 웹 UI로 비개발자도 사용 가능하도록 내부 서비스로 배포.',
    background:
      '사운드팀이 신규 음원마다 게임 모드별 채보를 수작업으로 제작해야 했고, 모드별로 채보 포맷이 다르고 작업량이 많아 병목이 발생하고 있었다. 딥러닝 기반 자동화로 작업 부담을 줄이고 일관된 품질을 확보할 필요가 있었다.',
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
    id: 'golf-analysis',
    accent: 'sky',
    name: '골프 플랫폼 사용자 데이터 분석',
    subtitle: '사용자 행동 패턴 분석 및 시각화',
    period: '2024.04 - 2024.05',
    tag: 'Side',
    overview:
      '골프 플랫폼 사용자 데이터를 수집·분석하여 플레이 패턴, 리뷰 감정, 활동 선호도 등 인사이트를 도출하는 데이터 분석 프로젝트.',
    background:
      '골프 사용자 경험 개선 방안을 고려하기 위해 실제 사용자 데이터를 기반으로 패턴을 분석하고 프로모션·이벤트 기획에 활용할 수 있는 시각화 자료를 도출하고자 했다.',
    coreFeatures: [
      '사용자 ID, 플레이 날짜, 날씨 조건, 플레이 시간 시각화',
      '워드클라우드를 통한 사용자 리뷰 분석',
      'VADER 감정 분석으로 부정적 리뷰 데이터 시각화',
      '연도별 일·월별 플레이 횟수 및 칼로리 소모량 시각화',
      '사용자 활동 패턴·선호도 기반 프로모션 방향 제안',
    ],
    troubleshooting: [],
    tasks: [
      '사용자 ID, 플레이 날짜, 날씨 조건, 플레이 시간 데이터 전처리 및 시각화',
      'VADER 감정 분석 라이브러리 적용으로 리뷰 데이터 긍·부정 분류',
      '워드클라우드 생성으로 주요 키워드 시각화',
      '연도별 일·월별 플레이 패턴 및 칼로리 소모량 트렌드 분석',
    ],
    achievements: [
      '사용자 활동 패턴 분석을 통해 프로모션·이벤트 기획에 활용 가능한 인사이트 도출',
    ],
    skills: ['Python', 'Pandas', 'Matplotlib', 'VADER', 'WordCloud', 'NumPy'],
  },
  {
    id: 'object-detection',
    accent: 'emerald',
    name: '객체 탐지 및 인스턴스 세그멘테이션',
    subtitle: 'COCO 데이터셋 기반 사람 탐지 파이프라인 구현',
    period: '2024.02 - 2024.04',
    tag: 'Side',
    overview:
      'COCO 데이터셋을 이용한 사람 객체 탐지 및 인스턴스 세그멘테이션 전체 파이프라인을 직접 구현한 프로젝트.',
    background:
      '컴퓨터 비전 파이프라인의 전 과정을 직접 구현하며 데이터 처리, 세그멘테이션, 시각화까지 이해하기 위해 진행했다.',
    coreFeatures: [
      'JSON 형식 COCO 어노테이션에서 이미지 ID, 카테고리, 바운딩 박스, 세그멘테이션 정보 추출',
      '세그멘테이션 데이터 변환 (RLE → polygon)',
      '이진 마스크 디코드 후 OpenCV로 윤곽선 추출 및 데이터 통일',
      '리사이즈 시 바운딩 박스·마스크 비율 유지 처리',
    ],
    troubleshooting: [
      {
        problem: '이미지를 목표 크기로 리사이즈 시 바운딩 박스·마스크 좌표 비율이 깨지는 문제',
        solution: '원본 이미지의 가장 가까운 픽셀 위치에서 값을 가져오는 NEAREST 보간법 적용으로 개선',
      },
    ],
    tasks: [
      'COCO JSON 어노테이션 파싱 및 이미지 ID·카테고리·바운딩 박스·세그멘테이션 정보 추출',
      'RLE → polygon 세그멘테이션 데이터 변환 기능 구현',
      '이진 마스크 디코드 후 OpenCV 윤곽선 추출 및 데이터 포맷 통일',
      '리사이즈 시 NEAREST 보간법 적용으로 좌표 비율 문제 해결',
    ],
    achievements: [
      'COCO 데이터셋 기반 object detection / instance segmentation 전체 파이프라인 직접 구현',
    ],
    skills: ['Python', 'OpenCV', 'COCO Dataset', 'NumPy', 'Matplotlib'],
  },
  {
    id: 'music-genre',
    accent: 'indigo',
    name: '음악 장르 분류 모델 개발',
    subtitle: '오디오 특성 기반 장르 자동 분류',
    period: '2023.12 - 2024.01',
    tag: 'Side',
    overview:
      '오디오 특성(MFCC, 주파수 등)을 추출하고 FNN 앙상블 기법으로 음악 장르를 자동 분류하는 머신러닝 모델 개발 프로젝트.',
    background:
      '다양한 음악 장르를 자동으로 예측·분류하는 모델을 구현하며 오디오 데이터 처리와 머신러닝 파이프라인을 직접 설계했다.',
    coreFeatures: [
      '오디오 특성(MFCC, rolloff, bandwidth, centroid 등) 추출',
      '장르 간 유사한 주파수 특징에 PCA 적용으로 차원 축소',
      'FNN 앙상블 기법으로 모델 정확도 개선',
      '하이퍼 파라미터 튜닝으로 최종 정확도 95.13% 달성',
    ],
    troubleshooting: [
      {
        problem: '오디오 데이터 처리 중 RMS 값이 0이 되어 로그 계산 시 무한대로 발산',
        solution: 'RMS 값에 매우 작은 수(epsilon)를 더해 무한대 발산 방지',
      },
      {
        problem: 'rolloff, bandwidth, centroid 등 주파수 특징이 장르 간 전반적으로 유사해 분류 성능 저하',
        solution: 'PCA 적용으로 데이터 차원 축소, 모델 복잡도 감소 및 계산 효율 향상',
      },
    ],
    tasks: [
      '오디오 데이터 전처리 및 MFCC·주파수 특성 추출',
      'PCA 적용으로 고차원 특성 벡터 차원 축소',
      'FNN 앙상블 기법 구현 및 하이퍼 파라미터 튜닝',
      'epsilon 처리로 RMS=0 구간 안정화',
    ],
    achievements: [
      '하이퍼 파라미터 조정 및 FNN 앙상블 적용으로 모델 정확도 90.04% → 95.13% 개선',
    ],
    skills: ['Python', 'Librosa', 'scikit-learn', 'NumPy', 'PCA', 'Matplotlib'],
  },
  {
    id: 'webcrawling',
    accent: 'cyan',
    name: '웹크롤링 데이터 시각화',
    subtitle: '오늘의집 제품 데이터 수집 및 분석',
    period: '2023.10 - 2023.11',
    tag: 'Side',
    overview:
      '오늘의집 사이트에서 제품 데이터를 크롤링하여 카테고리별 가격·리뷰·브랜드 현황을 분석하고 시각화한 프로젝트.',
    background:
      '동적 무한 스크롤 페이지에서 대량 데이터를 안정적으로 수집하고 소비자 트렌드를 시각화하여 인사이트를 도출하고자 했다.',
    coreFeatures: [
      '카테고리별 제품 이름, 가격, 할인률, 리뷰수, 브랜드 데이터 수집',
      '무한 스크롤 동적 페이지 처리 (스크롤·추출 동시 진행)',
      '소비자 검색 빈도 높은 브랜드 워드클라우드 시각화',
    ],
    troubleshooting: [
      {
        problem: '무한 스크롤 동적 페이지에서 스크롤 후 추출 시 데이터 누락 발생',
        solution: '스크롤과 데이터 추출을 동시 진행하고 전체 페이지의 1/2만큼만 스크롤하여 안정성 확보',
      },
    ],
    tasks: [
      'Selenium으로 무한 스크롤 동적 페이지 크롤링 구현',
      '카테고리별 제품 이름·가격·할인률·리뷰수·브랜드 데이터 수집 및 정제',
      '워드클라우드로 인기 브랜드 시각화',
    ],
    achievements: [
      '무한 스크롤 동적 페이지 크롤링 안정화 및 카테고리별 소비자 트렌드 시각화 완성',
    ],
    skills: ['Python', 'Selenium', 'Pandas', 'Matplotlib', 'WordCloud'],
  },
  {
    id: 'shuttle-monitor',
    accent: 'emerald',
    name: '어린이 셔틀버스 위험 모니터링 시스템',
    subtitle: 'IoT 기반 실시간 위험 감지 및 알림',
    period: '2019.03 - 2019.11',
    tag: 'Side',
    overview:
      '라즈베리파이·IoT 센서를 활용해 어린이 셔틀버스 내 위험 상황을 실시간 감지하고 보호자에게 텔레그램으로 알림을 전송하는 시스템.',
    background:
      '어린이 통학버스 관련 안전 사고가 사회적 이슈가 되던 시점에 IoT 기반으로 실시간 위험을 감지·알림하는 시스템을 직접 설계하고 구현했다. 졸업 논문 프로젝트.',
    coreFeatures: [
      '모션·소리 감지 센서, 라즈베리파이 웹캠, GPS 연동 설계',
      '차영상 기법(Frame Differencing)으로 이상 움직임 감지',
      '텔레그램 봇으로 GPS 위치 정보 포함 실시간 알림 전송',
      '어린이 심리 안정을 위한 뽀로로 사운드 출력 기능',
    ],
    troubleshooting: [],
    tasks: [
      '모션·소리 감지 센서, 라즈베리파이 웹캠, GPS 데이터 시트 분석 후 연동 설계',
      '차영상 기법을 라즈베리파이 웹캠에 적용하여 이상 움직임 감지',
      '셀레니움으로 GPS 정보 획득 후 텔레그램 봇으로 메시지 전송 처리',
    ],
    achievements: [
      '졸업 논문 채택 및 IT캡스톤디자인 경진대회 동상 수상',
    ],
    skills: ['Python', 'Raspberry Pi', 'OpenCV', 'Selenium', 'Telegram API', 'IoT'],
  },
]
