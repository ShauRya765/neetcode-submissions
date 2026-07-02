/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let slow = dummy;
        let fast = dummy;

        // move fast n nodes ahead
        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        // move both until fast reaches the last node
        while (fast.next !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        // slow is now right before the node to remove — skip over it
        slow.next = slow.next.next;

        return dummy.next;
    }
}
