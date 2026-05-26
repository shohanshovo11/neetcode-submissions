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
     * @return {ListNode}
     */
    // reverseList(head) {
    //     const arr = [];
    //     let curr = head;
        
    //     // Traverse the linked list and push values into the array
    //     while (curr !== null) {
    //         arr.push(curr.val);
    //         curr = curr.next;
    //     }

    //     // If the array is empty, return null (empty list case)
    //     if (arr.length === 0) return null;

    //     // Reverse the array
    //     arr.reverse();

    //     // Create the new head of the reversed list
    //     const newHead = new ListNode(arr[0]);
    //     curr = newHead;

    //     // Create the rest of the reversed list
    //     for (let i = 1; i < arr.length; i++) {
    //         const x = new ListNode(arr[i]);
    //         curr.next = x;
    //         curr = curr.next;
    //     }

    //     return newHead;
    // }

    reverseList(head) {
        let prev = null, curr = head;
        while(curr){
            let temp = curr.next;
            curr.next=prev;
            prev=curr;
            curr=temp;
        }
        return prev;
    }

}
