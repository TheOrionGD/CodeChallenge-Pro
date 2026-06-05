document.addEventListener('DOMContentLoaded', () => {
    // Challenge Database
    const CHALLENGES = [
        {
            id: 'string-reversal',
            title: 'String Reversal',
            difficulty: 'easy',
            category: 'Strings',
            xp: 300,
            description: `
                <p>Write a function that takes a string as input and returns the string reversed.</p>
                <h4>Constraints:</h4>
                <ul>
                    <li>Length of string &le; 10<sup>5</sup></li>
                    <li>String contains printable ASCII characters.</li>
                </ul>
                <h4>Example 1:</h4>
                <div class="code-block">Input: s = "hello"&#10;Output: "olleh"</div>
                <h4>Example 2:</h4>
                <div class="code-block">Input: s = "CodeChallengePro"&#10;Output: "orPegnellahCedoC"</div>
            `,
            templates: {
                javascript: `function reverseString(s) {\n    // Write your JavaScript code here\n    \n}`,
                python: `def reverse_string(s: str) -> str:\n    # Write your Python code here\n    pass`,
                cpp: `#include <string>\n\nclass Solution {\npublic:\n    std::string reverseString(std::string s) {\n        // Write your C++ code here\n        \n    }\n};`
            },
            testCases: [
                { input: '"hello"', expected: '"olleh"' },
                { input: '"CodeChallengePro"', expected: '"orPegnellahCedoC"' }
            ]
        },
        {
            id: 'two-sum',
            title: 'Two Sum',
            difficulty: 'easy',
            category: 'Algorithms',
            xp: 400,
            description: `
                <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
                <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
                <h4>Constraints:</h4>
                <ul>
                    <li>2 &le; nums.length &le; 10<sup>4</sup></li>
                    <li>-10<sup>9</sup> &le; nums[i] &le; 10<sup>9</sup></li>
                    <li>-10<sup>9</sup> &le; target &le; 10<sup>9</sup></li>
                </ul>
                <h4>Example 1:</h4>
                <div class="code-block">Input: nums = [2,7,11,15], target = 9&#10;Output: [0,1]</div>
                <h4>Example 2:</h4>
                <div class="code-block">Input: nums = [3,2,4], target = 6&#10;Output: [1,2]</div>
            `,
            templates: {
                javascript: `function twoSum(nums, target) {\n    // Write your JavaScript code here\n    \n}`,
                python: `def two_sum(nums: List[int], target: int) -> List[int]:\n    # Write your Python code here\n    pass`,
                cpp: `#include <vector>\n\nclass Solution {\npublic:\n    std::vector<int> twoSum(std::vector<int>& nums, int target) {\n        // Write your C++ code here\n        \n    }\n};`
            },
            testCases: [
                { input: 'nums = [2,7,11,15], target = 9', expected: '[0,1]' },
                { input: 'nums = [3,2,4], target = 6', expected: '[1,2]' }
            ]
        },
        {
            id: 'array-manipulation',
            title: 'Array Manipulation',
            difficulty: 'medium',
            category: 'Arrays',
            xp: 600,
            description: `
                <p>Starting with a 1-indexed array of zeros of size <code>n</code> and a list of operations, for each operation add a value to each of the array elements between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.</p>
                <h4>Constraints:</h4>
                <ul>
                    <li>3 &le; n &le; 10<sup>7</sup></li>
                    <li>1 &le; operations.length &le; 2 * 10<sup>5</sup></li>
                </ul>
                <h4>Example 1:</h4>
                <div class="code-block">Input: n = 5, queries = [[1,2,100],[2,5,100],[3,4,100]]&#10;Output: 200</div>
            `,
            templates: {
                javascript: `function arrayManipulation(n, queries) {\n    // Write your JavaScript code here\n    \n}`,
                python: `def array_manipulation(n: int, queries: List[List[int]]) -> int:\n    # Write your Python code here\n    pass`,
                cpp: `#include <vector>\n\nclass Solution {\npublic:\n    long arrayManipulation(int n, std::vector<std::vector<int>>& queries) {\n        // Write your C++ code here\n        \n    }\n};`
            },
            testCases: [
                { input: 'n = 5, queries = [[1,2,100],[2,5,100],[3,4,100]]', expected: '200' }
            ]
        },
        {
            id: 'data-structures',
            title: 'Merge K Sorted Lists',
            difficulty: 'hard',
            category: 'Trees/Graphs',
            xp: 800,
            description: `
                <p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>
                <p>Merge all the linked-lists into one sorted linked-list and return it.</p>
                <h4>Constraints:</h4>
                <ul>
                    <li>k == lists.length</li>
                    <li>0 &le; k &le; 10<sup>4</sup></li>
                    <li>0 &le; lists[i].length &le; 500</li>
                </ul>
                <h4>Example 1:</h4>
                <div class="code-block">Input: lists = [[1,4,5],[1,3,4],[2,6]]&#10;Output: [1,1,2,3,4,4,5,6]</div>
            `,
            templates: {
                javascript: `/*\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\nfunction mergeKLists(lists) {\n    // Write your JavaScript code here\n    \n}`,
                python: `# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\ndef merge_k_lists(lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n    # Write your Python code here\n    pass`,
                cpp: `/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* mergeKLists(std::vector<ListNode*>& lists) {\n        // Write your C++ code here\n        \n    }\n};`
            },
            testCases: [
                { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', expected: '[1,1,2,3,4,4,5,6]' }
            ]
        }
    ];

    // Local Storage / State Management
    let state = {
        username: 'Guest Coder',
        isLoggedIn: false,
        xp: 320,
        solvedChallenges: [],
        streak: 1,
        lastActive: new Date().toISOString().split('T')[0]
    };

    // Load State from LocalStorage if exists
    if (localStorage.getItem('codechallenge_state')) {
        try {
            state = JSON.parse(localStorage.getItem('codechallenge_state'));
        } catch (e) {
            console.error('Failed to parse user state', e);
        }
    }

    // Save State Function
    function saveState() {
        localStorage.setItem('codechallenge_state', JSON.stringify(state));
        updateUIFromState();
    }

    // Leaderboard Mock Database
    const LEADERBOARD_MOCK = [
        { name: 'AlphaCoder', xp: 3850, isMock: true },
        { name: 'ByteKnight', xp: 3120, isMock: true },
        { name: 'DevDynamo', xp: 2800, isMock: true },
        { name: 'GODFREY T R', xp: 2450, isMock: true },
        { name: 'StackMaster', xp: 1950, isMock: true }
    ];

    // Forum Posts Initial Data
    let forumPosts = [
        {
            id: 1,
            title: 'Tips for solving Array Manipulation efficiently!',
            author: 'AlphaCoder',
            body: 'When working on the Array Manipulation challenge, avoid using a nested loop for updates. Instead, use a difference array approach (Prefix Sums). Add value to index start and subtract from index end+1. This turns a O(N*M) runtime complexity into O(N+M)!',
            votes: 42,
            commentsCount: 8,
            upvoted: false,
            timestamp: '3 hours ago'
        },
        {
            id: 2,
            title: 'How is the recursion depth limit handled in Python templates?',
            author: 'DevDynamo',
            body: 'If you are implementing trees or DFS algorithms on large inputs, Python will throw a RecursionError. Remember you can set `sys.setrecursionlimit(20000)` or write your search query iteratively with an explicit stack stack structure!',
            votes: 18,
            commentsCount: 3,
            upvoted: false,
            timestamp: '5 hours ago'
        }
    ];

    // Current Playground State
    let activeChallenge = CHALLENGES[0];
    let activeLanguage = 'javascript';
    let challengeDrafts = {}; // Keeps user code edits during session

    // Core DOM Elements
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.app-section');
    const sidebarUsername = document.getElementById('sidebar-username');
    const sidebarAvatar = document.getElementById('sidebar-avatar');
    const sidebarLevel = document.getElementById('sidebar-level');
    const sidebarXpValue = document.getElementById('sidebar-xp-value');
    const sidebarXpFill = document.getElementById('sidebar-xp-fill');
    const userProfileSidebar = document.getElementById('user-profile-sidebar');
    
    // Stats elements
    const statRank = document.getElementById('stat-rank');
    const statXp = document.getElementById('stat-xp');
    const statSolved = document.getElementById('stat-solved');
    const statStreak = document.getElementById('stat-streak');
    
    // Dashboard actions
    const btnStartRecommended = document.getElementById('btn-start-recommended');
    const recommendDifficulty = document.getElementById('recommend-difficulty');
    const recommendTitle = document.getElementById('recommend-title');
    const recommendDesc = document.getElementById('recommend-desc');

    // UI Updates based on state
    function updateUIFromState() {
        // Sidebar updates
        sidebarUsername.textContent = state.username;
        sidebarAvatar.textContent = state.username.charAt(0).toUpperCase();
        
        // XP and Level Calculation
        // Level increases every 1000 XP
        const level = Math.floor(state.xp / 1000) + 1;
        const currentLevelXp = state.xp % 1000;
        
        sidebarLevel.textContent = `Level ${level} ${getLevelTitle(level)}`;
        sidebarXpValue.textContent = `${currentLevelXp}/1000`;
        sidebarXpFill.style.width = `${(currentLevelXp / 1000) * 100}%`;
        
        // Stats boxes updates
        statXp.textContent = `${state.xp} XP`;
        statSolved.textContent = `${state.solvedChallenges.length} / ${CHALLENGES.length}`;
        statStreak.textContent = `${state.streak} Day${state.streak !== 1 ? 's' : ''}`;
        
        // Profile widget layout changes
        const profileName = document.getElementById('profile-card-name');
        const profileLevel = document.getElementById('profile-card-level');
        const profileXp = document.getElementById('profile-card-xp');
        const profileCompleted = document.getElementById('profile-card-completed');
        const profileStreak = document.getElementById('profile-card-streak');
        const profileAvatar = document.getElementById('profile-card-avatar');
        
        if (profileName) {
            profileName.textContent = state.username;
            profileLevel.textContent = `Level ${level} ${getLevelTitle(level)}`;
            profileXp.textContent = `${state.xp} XP`;
            profileCompleted.textContent = `${state.solvedChallenges.length} / ${CHALLENGES.length}`;
            profileStreak.textContent = `${state.streak} Day${state.streak !== 1 ? 's' : ''}`;
            profileAvatar.textContent = state.username.charAt(0).toUpperCase();
        }

        // Leaderboard rendering
        renderLeaderboard();
        
        // Update recommended card
        updateRecommendedChallenge();

        // Nav authentication element update
        const authNavText = document.getElementById('nav-auth-text');
        const authNavItem = document.getElementById('nav-auth-item');
        if (authNavText) {
            authNavText.textContent = state.isLoggedIn ? 'Profile' : 'Sign In';
        }
    }

    function getLevelTitle(level) {
        if (level === 1) return 'Novice';
        if (level === 2) return 'Scripter';
        if (level === 3) return 'Craftsman';
        if (level === 4) return 'Master';
        return 'Grandmaster';
    }

    function updateRecommendedChallenge() {
        // Pick first unsolved challenge
        const unsolved = CHALLENGES.find(c => !state.solvedChallenges.includes(c.id));
        if (unsolved) {
            recommendDifficulty.textContent = unsolved.difficulty;
            recommendDifficulty.className = `difficulty-badge ${unsolved.difficulty}`;
            recommendTitle.textContent = unsolved.title;
            recommendDesc.innerHTML = unsolved.description.split('</p>')[0] + '</p>';
            recommendDesc.querySelector('p').style.margin = '0';
            btnStartRecommended.style.display = 'inline-flex';
        } else {
            recommendDifficulty.textContent = 'Expert';
            recommendDifficulty.className = 'difficulty-badge hard';
            recommendTitle.textContent = 'All Completed!';
            recommendDesc.textContent = 'Congratulations! You have completed all active challenges on the platform.';
            btnStartRecommended.style.display = 'none';
        }
    }

    // Leaderboard rendering (inserts user dynamically sorted)
    function renderLeaderboard() {
        const listContainer = document.getElementById('leaderboard-list');
        if (!listContainer) return;

        // Combine mocks and user
        let leaderboard = [...LEADERBOARD_MOCK];
        const userInList = leaderboard.find(item => item.name.toLowerCase() === state.username.toLowerCase());
        
        if (userInList) {
            // Update score
            userInList.xp = state.xp;
            userInList.isMock = false;
        } else {
            // Add user
            leaderboard.push({ name: state.username, xp: state.xp, isMock: false });
        }

        // Sort desc
        leaderboard.sort((a, b) => b.xp - a.xp);

        // Find user rank and update stat rank
        const userRankIndex = leaderboard.findIndex(item => item.name === state.username) + 1;
        statRank.textContent = `#${userRankIndex}`;

        listContainer.innerHTML = '';
        leaderboard.forEach((user, index) => {
            const rank = index + 1;
            let rankClass = 'rank-other';
            if (rank === 1) rankClass = 'rank-1';
            else if (rank === 2) rankClass = 'rank-2';
            else if (rank === 3) rankClass = 'rank-3';

            const itemDiv = document.createElement('div');
            itemDiv.className = `leaderboard-item ${!user.isMock ? 'highlight' : ''}`;
            itemDiv.innerHTML = `
                <div class="rank-badge ${rankClass}">${rank}</div>
                <div class="leaderboard-name">${user.name} ${!user.isMock ? '(You)' : ''}</div>
                <div class="leaderboard-xp">${user.xp} XP</div>
            `;
            listContainer.appendChild(itemDiv);
        });
    }

    // Activity Heatmap Generation
    function generateHeatmap() {
        const heatmapGrid = document.getElementById('activity-heatmap');
        if (!heatmapGrid) return;
        heatmapGrid.innerHTML = '';
        
        // Generate 120 cells
        for (let i = 0; i < 120; i++) {
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';
            
            // Assign some random mock level values to simulate history
            let level = 0;
            const r = Math.random();
            if (r > 0.85) level = 1;
            if (r > 0.92) level = 2;
            if (r > 0.96) level = 3;
            if (r > 0.99) level = 4;
            
            if (level > 0) {
                cell.classList.add(`level-${level}`);
            }
            
            // Set tooltip details
            const date = new Date();
            date.setDate(date.getDate() - (120 - i));
            cell.title = `${date.toDateString()}: ${level > 0 ? level + ' challenge(s) solved' : 'No activity'}`;
            
            heatmapGrid.appendChild(cell);
        }
    }

    // SPA Tab Navigation Action
    function switchTab(targetId) {
        sections.forEach(sec => {
            sec.classList.remove('active');
            if (sec.id === targetId) sec.classList.add('active');
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === targetId) {
                item.classList.add('active');
            }
        });

        // Specific panel controls on tab shift
        const authCardLogin = document.getElementById('auth-card-login');
        const authCardProfile = document.getElementById('auth-card-profile');
        
        if (targetId === 'auth') {
            if (state.isLoggedIn) {
                authCardLogin.style.display = 'none';
                authCardProfile.style.display = 'flex';
            } else {
                authCardLogin.style.display = 'flex';
                authCardProfile.style.display = 'none';
            }
        }
    }

    // Attach click listeners to sidebar links
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Start recommended challenge click
    if (btnStartRecommended) {
        btnStartRecommended.addEventListener('click', () => {
            const unsolved = CHALLENGES.find(c => !state.solvedChallenges.includes(c.id));
            if (unsolved) {
                openChallengeInWorkspace(unsolved);
            } else {
                openChallengeInWorkspace(CHALLENGES[0]);
            }
        });
    }

    // Challenges Search and Grid Rendering
    const searchInput = document.getElementById('challenge-search');
    const filterTags = document.querySelectorAll('.filter-tag');

    let activeFilter = 'all';
    let searchQuery = '';

    function renderChallengesGrid() {
        const grid = document.getElementById('challenges-grid-container');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        const filtered = CHALLENGES.filter(c => {
            const matchesFilter = activeFilter === 'all' || c.difficulty === activeFilter;
            const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  c.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No challenges found matching filters.</div>`;
            return;
        }

        filtered.forEach(c => {
            const isSolved = state.solvedChallenges.includes(c.id);
            const card = document.createElement('div');
            card.className = 'challenge-card glass-panel';
            card.innerHTML = `
                <div>
                    <div class="challenge-header">
                        <span class="difficulty-badge ${c.difficulty}">${c.difficulty}</span>
                        ${isSolved ? `
                            <span style="display: flex; align-items: center; gap: 4px; font-size: 0.8rem; color: var(--accent-emerald); font-weight: 600;">
                                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" style="margin-right: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
                                Solved
                            </span>` : ''}
                    </div>
                    <h3 class="challenge-card-title" style="margin-top: 12px;">${c.title}</h3>
                    <p class="challenge-desc">${c.description.replace(/<[^>]*>/g, '').substring(0, 120)}...</p>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 16px;">
                    <div class="challenge-meta">
                        <span>${c.category}</span>
                        <span>&bull;</span>
                        <span style="color: var(--accent-blue); font-weight: 500;">+${c.xp} XP</span>
                    </div>
                    <button class="btn btn-secondary start-challenge-btn" style="padding: 6px 14px; font-size: 0.8rem;" data-id="${c.id}">
                        ${isSolved ? 'Review' : 'Solve'}
                    </button>
                </div>
            `;

            // Start challenge event trigger
            card.querySelector('.start-challenge-btn').addEventListener('click', () => {
                openChallengeInWorkspace(c);
            });

            grid.appendChild(card);
        });
    }

    // Search and filters listeners
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderChallengesGrid();
        });
    }

    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            activeFilter = tag.getAttribute('data-filter');
            renderChallengesGrid();
        });
    });

    // Workspace Controller
    const workspaceTitle = document.getElementById('workspace-title');
    const workspaceDifficulty = document.getElementById('workspace-difficulty');
    const workspaceBodyContent = document.getElementById('workspace-body-content');
    const workspaceFilename = document.getElementById('workspace-filename');
    const editorLanguageSelect = document.getElementById('editor-language');
    const codeTextarea = document.getElementById('code-textarea');
    const lineNumbersDiv = document.getElementById('line-numbers');
    const terminalOutput = document.getElementById('terminal-output');
    const btnRunCode = document.getElementById('btn-run-code');
    const btnSubmitCode = document.getElementById('btn-submit-code');
    const workspaceBackBtn = document.getElementById('workspace-back-btn');

    function openChallengeInWorkspace(challenge) {
        activeChallenge = challenge;
        switchTab('workspace');

        // Render instruction info
        workspaceTitle.textContent = challenge.title;
        workspaceDifficulty.textContent = challenge.difficulty;
        workspaceDifficulty.className = `difficulty-badge ${challenge.difficulty}`;
        workspaceBodyContent.innerHTML = challenge.description;

        // Reset workspace editor draft / template logic
        const savedLanguage = activeLanguage;
        editorLanguageSelect.value = savedLanguage;
        
        loadCodeTemplate(challenge, savedLanguage);
        clearTerminal();
    }

    function loadCodeTemplate(challenge, language) {
        const fileExtensions = { javascript: 'js', python: 'py', cpp: 'cpp' };
        workspaceFilename.textContent = `solution.${fileExtensions[language]}`;

        // Fetch draft if edited in session, else use challenge template default
        const draftKey = `${challenge.id}_${language}`;
        if (challengeDrafts[draftKey]) {
            codeTextarea.value = challengeDrafts[draftKey];
        } else {
            codeTextarea.value = challenge.templates[language] || '';
        }
        
        syncLineNumbers();
    }

    function syncLineNumbers() {
        if (!codeTextarea || !lineNumbersDiv) return;
        const linesCount = codeTextarea.value.split('\n').length;
        let lineNumbersHTML = '';
        for (let i = 1; i <= linesCount; i++) {
            lineNumbersHTML += `${i}<br>`;
        }
        lineNumbersDiv.innerHTML = lineNumbersHTML;
    }

    // Line numbers syncing event listener
    if (codeTextarea) {
        codeTextarea.addEventListener('input', () => {
            const draftKey = `${activeChallenge.id}_${activeLanguage}`;
            challengeDrafts[draftKey] = codeTextarea.value;
            syncLineNumbers();
        });

        codeTextarea.addEventListener('scroll', () => {
            lineNumbersDiv.scrollTop = codeTextarea.scrollTop;
        });

        // Intercept Tab inside textarea
        codeTextarea.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = codeTextarea.selectionStart;
                const end = codeTextarea.selectionEnd;
                codeTextarea.value = codeTextarea.value.substring(0, start) + '    ' + codeTextarea.value.substring(end);
                codeTextarea.selectionStart = codeTextarea.selectionEnd = start + 4;
                
                const draftKey = `${activeChallenge.id}_${activeLanguage}`;
                challengeDrafts[draftKey] = codeTextarea.value;
                syncLineNumbers();
            }
        });
    }

    // Language dropdown selection change listener
    if (editorLanguageSelect) {
        editorLanguageSelect.addEventListener('change', (e) => {
            activeLanguage = e.target.value;
            loadCodeTemplate(activeChallenge, activeLanguage);
        });
    }

    // Back to challenges button
    if (workspaceBackBtn) {
        workspaceBackBtn.addEventListener('click', () => {
            switchTab('challenges');
        });
    }

    // Terminal Logging Functions
    function clearTerminal() {
        if (!terminalOutput) return;
        terminalOutput.innerHTML = '';
    }

    function printTerminalLine(text, type = 'stdout') {
        if (!terminalOutput) return;
        const line = document.createElement('div');
        line.className = `terminal-line terminal-${type}`;
        
        const timestamp = new Date().toLocaleTimeString();
        line.textContent = `[${timestamp}] ${text}`;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    // Toast Alerts
    function showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        // Icon matching toast type
        let iconMarkup = '';
        if (type === 'success') {
            iconMarkup = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="20 6 9 17 4 12"/></svg>`;
        } else if (type === 'error') {
            iconMarkup = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
        } else {
            iconMarkup = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
        }

        toast.innerHTML = `
            ${iconMarkup}
            <span>${message}</span>
        `;
        
        toastContainer.appendChild(toast);
        
        // Slide out and destroy after 3.5 seconds
        setTimeout(() => {
            toast.style.animation = 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) reverse';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3200);
    }

    // Code execution simulation click handlers
    if (btnRunCode) {
        btnRunCode.addEventListener('click', () => {
            const userCode = codeTextarea.value.trim();
            const template = activeChallenge.templates[activeLanguage].trim();
            
            // Check if unmodified
            if (userCode === template || userCode === '') {
                clearTerminal();
                printTerminalLine('Compilation Error: Function body is empty or unaltered.', 'error');
                printTerminalLine('Please write some custom logic inside the editor to proceed.', 'error');
                return;
            }

            clearTerminal();
            printTerminalLine(`Compiling solution.cpp/py/js...`, 'info');
            
            setTimeout(() => {
                printTerminalLine(`Running compiler verification...`, 'info');
                setTimeout(() => {
                    printTerminalLine(`Executing ${activeChallenge.testCases.length} Test Cases...`, 'info');
                    
                    setTimeout(() => {
                        // Print mock execution details
                        activeChallenge.testCases.forEach((tc, index) => {
                            printTerminalLine(`Test Case ${index + 1}: Input: ${tc.input}`, 'stdout');
                            printTerminalLine(`Test Case ${index + 1}: Output: ${tc.expected}`, 'stdout');
                            printTerminalLine(`Test Case ${index + 1}: Success`, 'success');
                        });
                        
                        printTerminalLine(`Status: All local test cases passed!`, 'success');
                        showToast('Local test cases passed!', 'info');
                    }, 600);
                }, 500);
            }, 400);
        });
    }

    if (btnSubmitCode) {
        btnSubmitCode.addEventListener('click', () => {
            const userCode = codeTextarea.value.trim();
            const template = activeChallenge.templates[activeLanguage].trim();
            
            // Check if unmodified
            if (userCode === template || userCode === '') {
                clearTerminal();
                printTerminalLine('Compilation Error: Code submission rejected.', 'error');
                printTerminalLine('You must implement the challenge requirements before submitting.', 'error');
                return;
            }

            clearTerminal();
            printTerminalLine(`Submitting code to sandbox server...`, 'info');
            
            setTimeout(() => {
                printTerminalLine(`Running rigorous system tests...`, 'info');
                setTimeout(() => {
                    printTerminalLine(`Result: 12/12 Test Cases Passed!`, 'success');
                    printTerminalLine(`Complexity Analysis:`, 'info');
                    printTerminalLine(`  Runtime: 42 ms (beats 88.5% of submissions)`, 'success');
                    printTerminalLine(`  Memory: 38.4 MB (beats 92.1% of submissions)`, 'success');
                    printTerminalLine(`Submission Successful!`, 'success');

                    // If already solved, don't re-grant XP
                    const alreadySolved = state.solvedChallenges.includes(activeChallenge.id);
                    if (!alreadySolved) {
                        state.solvedChallenges.push(activeChallenge.id);
                        state.xp += activeChallenge.xp;
                        
                        // Increment heatmap day score
                        generateHeatmap();
                        
                        showToast(`Correct Answer! +${activeChallenge.xp} XP Earned.`, 'success');
                    } else {
                        showToast(`Correct Answer! Solution reviewed successfully.`, 'success');
                    }

                    // Save state updates
                    saveState();
                    renderChallengesGrid();
                }, 800);
            }, 500);
        });
    }

    // Community / Forum Logic
    const newPostTitle = document.getElementById('new-post-title');
    const newPostBody = document.getElementById('new-post-body');
    const btnCreatePost = document.getElementById('btn-create-post');
    const forumContainer = document.getElementById('forum-posts-container');

    function renderForumPosts() {
        if (!forumContainer) return;
        forumContainer.innerHTML = '';
        
        forumPosts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'forum-post-card glass-panel';
            postCard.innerHTML = `
                <div class="vote-widget">
                    <button class="vote-btn ${post.upvoted ? 'active' : ''}" data-id="${post.id}">
                        <svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
                    </button>
                    <span class="vote-count">${post.votes}</span>
                </div>
                <div class="post-main">
                    <div class="post-header">
                        <span class="post-author">${post.author}</span>
                        <span>&bull;</span>
                        <span>${post.timestamp}</span>
                    </div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-body">${post.body}</p>
                    <div class="post-footer">
                        <a class="post-comment-btn">
                            <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            <span>${post.commentsCount} Comment${post.commentsCount !== 1 ? 's' : ''}</span>
                        </a>
                    </div>
                </div>
            `;

            // Upvote hook
            postCard.querySelector('.vote-btn').addEventListener('click', (e) => {
                const btn = e.currentTarget;
                const postId = parseInt(btn.getAttribute('data-id'));
                const matched = forumPosts.find(p => p.id === postId);
                
                if (matched) {
                    if (matched.upvoted) {
                        matched.votes--;
                        matched.upvoted = false;
                    } else {
                        matched.votes++;
                        matched.upvoted = true;
                    }
                    renderForumPosts();
                }
            });

            forumContainer.appendChild(postCard);
        });
    }

    if (btnCreatePost) {
        btnCreatePost.addEventListener('click', () => {
            const title = newPostTitle.value.trim();
            const body = newPostBody.value.trim();

            if (!title || !body) {
                showToast('Please enter both a title and details for your post.', 'error');
                return;
            }

            // Push post to stack
            const newPost = {
                id: Date.now(),
                title: title,
                author: state.username,
                body: body,
                votes: 1,
                commentsCount: 0,
                upvoted: true,
                timestamp: 'Just now'
            };

            forumPosts.unshift(newPost);
            
            // Reset input values
            newPostTitle.value = '';
            newPostBody.value = '';
            
            renderForumPosts();
            showToast('Post published successfully!', 'success');
        });
    }

    // Support Form Submission
    const supportForm = document.getElementById('support-form');
    const btnSendSupport = document.getElementById('btn-send-support');
    
    if (supportForm) {
        supportForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('support-name').value.trim();
            const email = document.getElementById('support-email').value.trim();
            const msg = document.getElementById('support-msg').value.trim();

            if (!name || !email || !msg) return;

            showToast('Sending message...', 'info');
            btnSendSupport.disabled = true;
            btnSendSupport.textContent = 'Sending...';

            setTimeout(() => {
                showToast('Message sent! Support agent GODFREY T R will respond soon.', 'success');
                supportForm.reset();
                btnSendSupport.disabled = false;
                btnSendSupport.textContent = 'Send Message';
            }, 1200);
        });
    }

    // Authentication (Login/Logout) Logic
    const loginForm = document.getElementById('login-form');
    const btnLogout = document.getElementById('btn-logout');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('username').value.trim();
            const passwordInput = document.getElementById('password').value.trim();

            if (!usernameInput || !passwordInput) return;

            // Simple mock authentication simulation
            showToast('Authenticating...', 'info');
            
            setTimeout(() => {
                state.username = usernameInput;
                state.isLoggedIn = true;
                
                // Grant streak or solve defaults if new login, or just keep progress
                saveState();
                switchTab('dashboard');
                showToast(`Welcome back, ${state.username}!`, 'success');
                loginForm.reset();
            }, 800);
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            state.username = 'Guest Coder';
            state.isLoggedIn = false;
            state.xp = 320;
            state.solvedChallenges = [];
            state.streak = 1;
            
            saveState();
            switchTab('dashboard');
            showToast('You have signed out.', 'info');
        });
    }

    // App Initialization
    updateUIFromState();
    generateHeatmap();
    renderChallengesGrid();
    renderForumPosts();
});