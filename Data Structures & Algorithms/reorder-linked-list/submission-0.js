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
     * @return {void}
     */
    reorderList(head) {
        let fast = head;
        let slow = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let prev = null;
        let curr = slow;

        while (curr !== null) {
            let next = curr.next; // save the rest
            curr.next = prev; // flip arrow backward
            prev = curr; // advance prev
            curr = next; // advance curr
        }

        let first = head;
        let second = prev;

        // stop when the two halves meet in the middle
        while (second.next !== null) {
            // save the next nodes before we overwrite pointers
            let tmp1 = first.next;
            let tmp2 = second.next;

            first.next = second; // first → second
            second.next = tmp1; // second → (old first.next)

            // advance both pointers
            first = tmp1;
            second = tmp2;
        }
    }
}
